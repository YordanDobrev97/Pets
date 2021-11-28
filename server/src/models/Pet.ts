import { Document, Model, model, Schema } from "mongoose";
import { IUser } from "./User";

/**
 * Interface to model the Profile Schema for TypeScript.
 * @param user:ref => User._id
 * @param firstName:string
 * @param lastName:string
 * @param username:string
 */
export interface IPet extends Document {
  name: string,
  image: string,
  description: string
  owner: IUser['id']
}

const PetSchema: Schema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default model<IPet>('Pet', PetSchema);
