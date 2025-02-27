import { NextRequest } from "next/server";
import mongoose from "mongoose";
import Vacancy from "../../../../schemas/vacancySchema";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const query = params.get("query") || "";
  const page = Number(params.get("page")) || 1;
  const limit = Number(params.get("limit")) || 25;

  /* return Response.json({ message: `${page}, ${limit}, ${query}` }); */

  try {
    // connect to db
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.MONGO_DB_PASS}@statejobsny.ghdod.mongodb.net/?retryWrites=true&w=majority&appName=StateJobsNY`
    );

    let vacancies;

    if (query === "") {
      // if no query, return all vacancies
      vacancies = await Vacancy.find({})
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ _id: -1 });
    } else {
      // search for vacancies
      vacancies = await Vacancy.find({
        $text: { $search: query },
      })
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ _id: -1 });
    }

    const totalVacancies = await Vacancy.countDocuments();
    return Response.json({
      totalPages: Math.ceil(totalVacancies / limit), // total pages
      currentPage: page,
      vacancies,
    });
  } catch (error) {
    console.log(error);
  }
}
