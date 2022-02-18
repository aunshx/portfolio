const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    message: {
      type: String,
      maxLength: 145,
    },
    seen: {
      type: Boolean,
      default: false
    },
    replied: {
      type: Boolean,
      default: false
    },
    organisation: {
      type: String,
    },
    email: {
      type: String,
      required: true,
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
