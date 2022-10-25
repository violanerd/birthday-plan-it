import { Schema } from "mongoose";

const partySchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    guests: {
      // placeholder
    },
    date: {
      type: Date,
    },
    location: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    theme: {},
    description: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const guestSchema

const Party = model("Party", partySchema);

module.exports = Party;
