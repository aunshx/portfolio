const mongoose = require("mongoose");

const IpSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    ip: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    countryCode: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

module.exports = Ip = mongoose.model("ip", IpSchema);
