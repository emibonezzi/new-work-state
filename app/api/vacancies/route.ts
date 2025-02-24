import Vacancy from "../../../schemas/vacancySchema";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: Response) {
  const searchParams = req.nextUrl.searchParams;
  let page = searchParams.get("page") || 1; // default page 1
  let limit = searchParams.get("limit") || 10; // default limit 10

  // convert params to number
  page = typeof page === "string" ? parseInt(page) : page;
  limit = typeof limit === "string" ? parseInt(limit) : limit;

  try {
    // connect to db
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.MONGO_DB_PASS}@statejobsny.ghdod.mongodb.net/?retryWrites=true&w=majority&appName=StateJobsNY`
    );
    const vacancies = await Vacancy.find({})
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ _id: -1 });

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
