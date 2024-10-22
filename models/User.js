const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile: {
      first_name: { type: String, default: "" },
      last_name: { type: String, default: "" },
      phone: { type: Number, default: "" },
      work_experience: [],
      education: [],
      certifications: [],
      hobbies: [],
      bio: { type: String, default: "" },
      address: { type: String, default: "" },
      profilePicture: { type: String }, // Store path to profile picture
      resume: { type: String }, // Store path to uploaded resume/CV
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
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
