import { Schema, model } from "mongoose";

const partySchema = new Schema(
  {
    host: {
      type: String,
      required: true,
    },
    guests: [
      {
        type: String,
        match: [/.+@.+\..+/, "Must match an email address!"],
      },
    ],
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
    theme: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    /*
    comments: {
        
    }
    */
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Party = model("Party", partySchema);

module.exports = Party;
