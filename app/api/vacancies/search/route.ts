import { NextRequest } from "next/server";
import mongoose from "mongoose";
import Vacancy from "../../../../schemas/vacancySchema";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 30;
  searchParams.delete("page"); // remove page and limit
  searchParams.delete("limit");
  const params = Object.fromEntries(searchParams); // pass query to db

  console.log(params);

  try {
    // connect to db
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.MONGO_DB_PASS}@statejobsny.ghdod.mongodb.net/?retryWrites=true&w=majority&appName=StateJobsNY`
    );

    let vacancies;
    let totalVacancies;

    if (Object.keys(params).length === 0) {
      // if no query, return all vacancies
      vacancies = await Vacancy.find({})
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ _id: -1 });
      totalVacancies = await Vacancy.countDocuments();
    } else {
      // search for vacancies
      vacancies = await Vacancy.find(params)
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ _id: -1 });

      totalVacancies = await Vacancy.countDocuments(params);
    }

    return Response.json({
      totalPages: Math.ceil(totalVacancies / limit), // total pages
      currentPage: page,
      vacancies,
    });
  } catch (error) {
    console.log(error);
  }
}
