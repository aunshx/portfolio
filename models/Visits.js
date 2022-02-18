const mongoose = require("mongoose");

const VisitsSchema = new mongoose.Schema(
  {
    common: {
      type: Number,
      default: 0310266
    },
    count: {
      type: Number,
      default: 0
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

module.exports = Visits = mongoose.model("visits", VisitsSchema);
