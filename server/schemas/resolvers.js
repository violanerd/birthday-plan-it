const { User, Party } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("parties");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-__v -password").populate("parties");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("parties");
    },
    parties: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Party.find(params).sort({ createdAt: -1 });
    },
    party: async (parent, { _id }) => {
      return Party.findOne({ _id });
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
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { parties: party._id } },
          { new: true }
        );

        return party;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    // invite additional guests after the party is created
    inviteGuest: async (parent, args, context) => {
      if (context.user) {
      }
    },
  },
};

module.exports = resolvers;
