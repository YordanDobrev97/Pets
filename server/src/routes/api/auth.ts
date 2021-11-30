import bcrypt from "bcryptjs";
import config from "config";
import { Router, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";

import auth from "../../middleware/auth";
import Payload from "../../types/Payload";
import Request from "../../types/Request";
import User, { IUser } from "../../models/User";

const router: Router = Router();

// @route   GET api/auth
// @desc    Get authenticated user given the token
// @access  Private
router.get("/", auth, async (req: Request, res: Response) => {
  try {
    const user: IUser = await User.findById(req.userId).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

// @route POST api/auth
// @desc Register user
// @access Public

router.post('/signup', async (req: Request, res: Response) => {
  const { email, username, password } = req.body

  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)
  const defaultAvatar = 'https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png'

  const newUser = new User({
    email: email,
    username: username,
    password: hashPassword,
    avatar: defaultAvatar
  });

  const userRes = await newUser.save()
  const token = createToken(userRes)
  res.json(token)
})

// @route   POST api/auth
// @desc    Login user and get token
// @access  Public
router.post(
  "/signin",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user: IUser = await User.findOne({ email });

      if (!user) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          errors: [
            {
              msg: "Invalid Credentials"
            }
          ]
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          errors: [
            {
              msg: "Invalid Credentials"
            }
          ]
        });
      }

      const payload = {
        userId: user.id,
        role: user.role,
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: config.get("jwtExpiration") },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
  }
);

export default router;


function createToken(user: IUser) {
  const expiresIn = 60 * 60; // an hour
  const secret = 'very-secrtet';
  const dataStoredInToken = {
    _id: user._id,
    role: user.role
  };

  return {
    expiresIn,
    token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
  };
}