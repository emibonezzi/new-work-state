import mongoose from "mongoose";
import Filter from "../../../../schemas/filtersSchema";

export async function GET() {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.MONGO_DB_PASS}@statejobsny.ghdod.mongodb.net/?retryWrites=true&w=majority&appName=StateJobsNY`
    );

    const allFilters = await Filter.find();

    return Response.json({ filters: allFilters });
  } catch (error) {
    console.log(error);
  }
}
