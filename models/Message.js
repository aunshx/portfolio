const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    message: {
      type: String,
      maxLength: 145
    },
    organisation: {
      type: String,
    },
    email: {
      type: String,
      required: true
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

module.exports = Message = mongoose.model("message", MessageSchema);
