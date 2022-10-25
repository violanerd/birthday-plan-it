const { Schema, model } = require("mongoose");

const partySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
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
    theme: {
      type: Number,
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
