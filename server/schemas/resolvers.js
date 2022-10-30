const { User, Party } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const sendEmail = require("../utils/email");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("party");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-__v -password").populate("party");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("party");
    },
    /* Currently no way to get all parties, something to add back if needed */
    partyByUser: async (parent, { hostName }) => {
      return Party.findOne({ hostName });
    },
    partyById: async (parent, { _id }) => {
      return Party.findOne({ _id });
    },
    emailGuests: async (parent, { _id }) => {
      const guests = await Party.findOne({ _id });
      const response = await sendEmail(guests.guests);
      console.log(response);
      return guests;
    },

    // Future Dev: Get a list of all parties you've been invited to?
    // Filter out Parties with dates that have already passed?
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addParty: async (parent, args, context) => {
      if (context.user) {
        const party = await Party.create({
          ...args,
          host: context.user.username,
          rsvps: [],
          declines: [],
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { party: party._id },
          { new: true }
        );

        return party;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    // invite additional guests after the party is created
    inviteGuest: async (parent, args, context) => {
      if (context.user) {
        const party = await Party.findByIdAndUpdate(
          { _id: args.partyId },
          { $push: { guests: args.email } },
          { new: true, runValidators: true }
        );

        return party;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    rsvpToParty: async (parent, args, context) => {
      if (context.user) {
        const party = await Party.findById({ _id: args.partyId });
        if (party.guests.includes(context.user.email)) {
          const rsvp = await Party.findByIdAndUpdate(
            { _id: party._id },
            { $push: { rsvps: context.user.email } },
            { new: true, runValidators: true }
          );
          return rsvp;
        }

        throw new AuthenticationError("You weren't invited!");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    declineParty: async (parent, args, context) => {
      if (context.user) {
        const party = await Party.findById({ _id: args.partyId });
        if (party.guests.includes(context.user.email)) {
          const rsvp = await Party.findByIdAndUpdate(
            { _id: party._id },
            { $push: { declines: context.user.email } },
            { new: true, runValidators: true }
          );
          return rsvp;
        }

        throw new AuthenticationError("You weren't invited!");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addDescription: async (parent, args, context) => {
      if (context.user) {
        const party = await Party.findByIdAndUpdate(
          { _id: args.partyId },
          { description: args.description },
          { new: true }
        );

        return party;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
