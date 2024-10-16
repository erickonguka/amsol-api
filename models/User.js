const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: Object,
      default: {},
    },
    role: {
      type: String,
      enum: ["job applicant", "admin", "super admin", "system"],
      default: "job applicant",
    },
    status: {
      type: String,
      enum: ["active", "suspended"],
      default: "active",
    },
  },
  { timestamps: true }  // Adds createdAt and updatedAt automatically
);

const User = mongoose.model("User", userSchema);

module.exports = User;
