import mongoose from "mongoose";

const vacancySchema = new mongoose.Schema(
  {
    vacancy_id: String,
    title: String,
    grade: String,
    date_posted: String,
    deadline: String,
    department: String,
    county: String,
    active: Boolean,
  },
  { strict: false }
);

export default mongoose.model("Vacancy", vacancySchema);
