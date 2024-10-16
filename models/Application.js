const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      
    },
    resume: {
      type: String,
      
    },
    coverLetter: {
      type: String,
    },
    status: {
      type: String,
      enum: ["applied", "interview", "hired", "rejected"],
      default: "applied",
    },
    // Personal Details
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    lastName: { type: String, required: true },
    idNumber: { type: String, required: true },
    whatsAppNo: { type: String },  // Fixed typo
    phoneNumber: { 
      type: String, 
      required: true, 
      validate: {
        validator: function (v) {
          return /^[0-9]{10,15}$/.test(v);  // Example: 10-15 digits
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    nationality: { type: String, required: true },
    location: { type: String, required: true },
    specialization: { type: String },
    academicLevel: {
      type: String,
      enum: [
        "Master's Degree",
        "Postgraduate Diploma",
        "Bachelor’s Degree",
        "Associate's Degree",
        "Diploma",
        "Certificate",
        "others",
      ],
    },
    workExperience: [
      {
        company: { type: String },
        position: { type: String },
        duration: { type: String },
      },
    ],
    salaryInfo: { type: String },
    cv: { type: String }
  },
  { timestamps: true }  // Automatically adds createdAt and updatedAt
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
