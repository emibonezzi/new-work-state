import { NextRequest } from "next/server";
import mongoose from "mongoose";
import Vacancy from "../../../../schemas/vacancySchema";

export async function GET(req: NextRequest) {
  const params = Object.fromEntries(req.nextUrl.searchParams);

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
        .limit(25)
        .skip((1 - 1) * 25)
        .sort({ _id: -1 });
      totalVacancies = await Vacancy.countDocuments();
    } else {
      // search for vacancies
      vacancies = await Vacancy.find(params)
        .limit(25)
        .skip((1 - 1) * 25)
        .sort({ _id: -1 });

      totalVacancies = await Vacancy.countDocuments(params);
    }

    return Response.json({
      totalPages: Math.ceil(totalVacancies / 25), // total pages
      currentPage: 1,
      vacancies,
    });
  } catch (error) {
    console.log(error);
  }
}
