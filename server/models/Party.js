const { Schema, model } = require("mongoose");

function validateEmail(email) {
  const reg = /.+@.+\..+/;
  return reg.test(email);
}

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
        validate: [validateEmail, "Must match an email address!"],
        match: [/.+@.+\..+/, "Must match an email address!"],
        unique: true,
      },
    ],
    rsvps: [
      {
        type: String,
        validate: [validateEmail, "Must match an email address!"],
        match: [/.+@.+\..+/, "Must match an email address!"],
        unique: true,
      },
    ],
    declines: [
      {
        type: String,
        validate: [validateEmail, "Must match an email address!"],
        match: [/.+@.+\..+/, "Must match an email address!"],
        unique: true,
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

partySchema.virtual("rsvpCount").get(function () {
  return this.rsvps.length;
});

const Party = model("Party", partySchema);

module.exports = Party;
