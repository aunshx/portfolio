const mongoose = require("mongoose");

const VisitsSchema = new mongoose.Schema(
  {
    common: {
      type: String,
      default: "0310266",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
);

module.exports = Visits = mongoose.model("visits", VisitsSchema);
