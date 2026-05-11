const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
    message: { type: String, trim: true, default: "" },
    consent: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Application", applicationSchema);
