import mongoose from "mongoose";

const filterSchema = new mongoose.Schema(
  {
    filter_name: String,
    filters_values: [String],
  },
  {
    strict: false,
  }
);

export default mongoose.model("Filter", filterSchema);
