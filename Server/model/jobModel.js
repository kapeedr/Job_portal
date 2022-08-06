const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    appliedCandidates: { type: [], required: true },

    title: { type: String, required: true },

    department: { type: String, required: true },

    experience: { type: String, required: true },

    skillsRequired: { type: String, required: true },

    fullDescription: { type: String, required: true },

    company: { type: String, required: true },

    createdAt: { type: String, required: true },

    jobType: { type: String, required: true }, //fully remote  full time  part-time/internship

    jobWorkplace: { type: String, required: true }, //onsite  offsite  hybrid

    location: { type: String, required: true }, //location of job
  },
  {
    timestamps: true,
  }
);
//creating new collection on mongodb campus
const jobModel = new mongoose.model("jobs", jobSchema);
module.exports = jobModel;
