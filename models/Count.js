const mongoose = require("mongoose");

const CountSchema = new mongoose.Schema(
  {
    capture: {
      type: String,
      default: 'Capture'
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

module.exports = Count = mongoose.model("count", CountSchema);
