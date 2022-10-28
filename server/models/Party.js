const { Schema, model } = require("mongoose");

const partySchema = new Schema(
  {
    hostName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    guests: [
      {
        type: String,
        match: [/.+@.+\..+/, "Must match an email address!"],
      },
    ],
    rsvps: [
      {
        type: String,
        match: [/.+@.+\..+/, "Must match an email address!"],
      },
    ],
    date: {
      type: Date,
    },
    time: {
      type: String,
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
