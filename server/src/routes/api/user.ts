import bcrypt from "bcryptjs"
import config from "config"
import { Router, Response } from "express"
import { check, validationResult } from "express-validator/check"
import gravatar from "gravatar"
import HttpStatusCodes from "http-status-codes"
import jwt from "jsonwebtoken"

import Payload from "../../types/Payload"
import Request from "../../types/Request"
import User, { IUser } from "../../models/User"
import Pet from '../../models/Pet'

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password, returns the token upon successful registration
// @access  Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
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

      if (user) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          errors: [
            {
              msg: "User already exists"
            }
          ]
        });
      }

      const options: gravatar.Options = {
        s: "200",
        r: "pg",
        d: "mm"
      };

      const avatar = gravatar.url(email, options);

      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      // Build user object based on IUser
      const userFields = {
        email,
        password: hashed,
        avatar
      };

      user = new User(userFields);

      await user.save();

      const payload: Payload = {
        userId: user.id
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

// @route  POST api/user/adoption
// @desc   Adoption of an animal from the shelter
// @access Public
router.post('/adoption', async (req: Request, res: Response) => {
  const { petId, userId } = req.body

  const pet = await Pet.findById(petId)
  pet.owner = userId
  await pet.save()

  res.json(pet)
})

// @route  POST api/user/adoption
// @desc   Return of the animal to the shelter
// @access Public
router.post('/returnToShelter', async (req: Request, res: Response) => {
  const { petId } = req.body
  const pet = await Pet.findById(petId)
  pet.owner = null;
  await pet.save()

  res.json(pet)
})

// @route   POST api/user/:id
// @desc    Get all user pets
// @access  Public
router.get('/pets/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params

  if (userId) {
    const pets = await Pet.find().where('owner').in([userId]).exec()
    res.json(pets)
  } else {
    res.json('No pets')
  }
})

export default router;
