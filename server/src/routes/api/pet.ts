import { Router, Response } from "express";
import Pet, { IPet } from "../../models/Pet";
import Request from "../../types/Request";
import User, { IUser } from "../../models/User";

const router: Router = Router();

// @route   GET /api/pet/all
// @desc    Get all pets
// @access  Public
router.get("/all", async (_req: Request, res: Response) => res.json(await Pet.find().lean()))

// @route POST api/pet/new
// @description Create new Pet
// @access Public
router.post('/new', async (req: Request, res: Response) => {
  const { name, imageUrl, description } = req.body
  const newPet = new Pet({
    name, imageUrl, description
  })

  const petRes = await newPet.save()
  res.json(petRes)
})

// @Route PUT api/edit/pet:id
router.put('/new:id', async (req: Request, res: Response) => {
})

router.delete('pet:id', (req: Request, res: Response) => {
})

export default router;
