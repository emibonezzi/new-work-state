import Vacancy from "@/types/vacancy";
import JobCard from "./components/JobCard";
import FilterBox from "./components/FilterBox";

export default async function Home() {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/vacancies?page=1&limit=25`
  );
  const data = await res.json();
  return (
    <div className="m-5">
      <header className="grid grid-cols-2">
        <div id="logo" className="flex items-center gap-4">
          <img src="/new-work-state-logo.svg" />
          <h1 className="text-3xl">New Work State</h1>
        </div>

        <div id="log-in" className="flex items-center justify-end gap-3">
          <button>Sign up</button>
          <button className="">Log In</button>
        </div>
      </header>

      <main className="flex flex-col gap-3 mt-3">
        <div className="grid grid-cols-[1fr_4fr] gap-3">
          <aside id="job-filters" className="flex flex-col gap-3">
            <FilterBox
              name="Salary Range"
              options={[
                "$0 - $20,000",
                "$20,000 - $40,000",
                "$40,000 - $60,000",
                "$60,000 - $80,000",
                "$80,000 - $100,000",
                "$100,000+",
              ]}
            ></FilterBox>
          </aside>
          <section id="job-dashboard" className="flex flex-col gap-3">
            <div className="border border-[rgb(11_93_102)] rounded-lg p-4 flex justify-between items-center">
              <select name="" id="">
                <option value="">Most Recent</option>
                <option value="">Salary (Low to High)</option>
                <option value="">Salary (High to Low)</option>
                <option value="">Title (A-Z)</option>
                <option value="">Title (Z-A)</option>
              </select>
              <input
                type="text"
                placeholder="Search for a job"
                className="border border-[rgb(11_93_102)] rounded-lg p-2"
              />
            </div>
            <div
              id="dashboard-jobs"
              className="grid grid-cols-[1fr_1fr_1fr] gap-3"
            >
              {data.vacancies.map((vacancy: Vacancy) => (
                <JobCard key={vacancy._id} vacancy={vacancy}></JobCard>
              ))}
            </div>
          </section>
        </div>
        <div id="pagination" className="flex justify-end gap-3">
          <button>Previous</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
