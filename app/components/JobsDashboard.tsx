import React from "react";
import Search from "./Search";
import JobCard from "./JobCard";
import Vacancy from "@/types/vacancy";
import Pagination from "./Pagination";
import VacancyResponse from "@/types/vacancyResponse";

interface Props {
  query: string;
  currentPage: number;
}

const JobsDashboard = async ({ query, currentPage }: Props) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/vacancies/search?page=${currentPage}&query=${query}`
  );
  const data: VacancyResponse = await res.json();

  return (
    <div>
      <section id="job-dashboard" className="flex flex-col gap-3">
        <div className="border border-[rgb(11_93_102)] rounded-lg p-4 flex justify-between items-center">
          <Search placeholder="Search for a job..." />
        </div>
        <div id="dashboard-jobs" className="grid grid-cols-[1fr_1fr_1fr] gap-3">
          {data.vacancies
            .filter((v) => v.active)
            .map((vacancy: Vacancy) => (
              <JobCard key={vacancy.vacancy_id} vacancy={vacancy} />
            ))}
        </div>
      </section>
      <Pagination totalPages={data.totalPages} currentPage={data.currentPage} />
    </div>
  );
};

export default JobsDashboard;
