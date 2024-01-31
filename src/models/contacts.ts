import { Schema, model, models } from "mongoose";
// const { ObjectId } = require("mongoose").Types;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name"],
    },
    age: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Contact = models.Contact || model("Contact", contactSchema);
