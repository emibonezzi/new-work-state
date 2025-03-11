import React from "react";
import JobCard from "./JobCard";
import Vacancy from "@/types/vacancy";
import Pagination from "./Pagination";
import VacancyResponse from "@/types/vacancyResponse";
import Query from "@/types/query";
import axios from "axios";
import FiltersSummary from "./FiltersSummary";

interface Props {
  query: Query | undefined;
  currentPage: number;
}

const JobsDashboard = async ({ query, currentPage }: Props) => {
  const res = await axios.get(
    `${process.env.BACKEND_URL}/api/vacancies/search`,
    {
      params: { ...query, page: currentPage },
    }
  );
  const data: VacancyResponse = await res.data;

  return (
    <div>
      <section id="job-dashboard" className="flex flex-col gap-3">
        <div className="border border-[rgb(11_93_102)] rounded-lg p-4">
          <FiltersSummary query={query}></FiltersSummary>
        </div>
        <div id="dashboard-jobs" className="grid grid-cols-3 gap-3">
          {data.vacancies
            .filter((v) => v.active)
            .map((vacancy: Vacancy) => (
              <div key={vacancy.vacancy_id}>
                <JobCard vacancy={vacancy} />
              </div>
            ))}
        </div>
      </section>
      <Pagination
        totalVacancies={data.vacancies.length}
        totalPages={data.totalPages}
        currentPage={data.currentPage}
      />
    </div>
  );
};

export default JobsDashboard;
