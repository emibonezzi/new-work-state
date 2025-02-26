import React from "react";
import Search from "./Search";
import JobCard from "./JobCard";
import Vacancy from "@/types/vacancy";

interface Props {
  query: string;
  currentPage: number;
}

const JobsDashboard = async ({ query, currentPage }: Props) => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/vacancies/search?page=${currentPage}`
  );
  const data = await res.json();

  return (
    <section id="job-dashboard" className="flex flex-col gap-3">
      <div className="border border-[rgb(11_93_102)] rounded-lg p-4 flex justify-between items-center">
        <Search placeholder="Search for a job..." />
      </div>
      <div id="dashboard-jobs" className="grid grid-cols-[1fr_1fr_1fr] gap-3">
        {data.vacancies.map((vacancy: Vacancy) => (
          <JobCard key={vacancy.vacancy_id} vacancy={vacancy} />
        ))}
      </div>
    </section>
  );
};

export default JobsDashboard;
