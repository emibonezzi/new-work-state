import Vacancy from "@/types/vacancy";
import JobCard from "./components/JobCard";

export default async function Home() {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/vacancies?page=1&limit=10`
  );
  const data = await res.json();
  return (
    <div className="m-5">
      <header className="grid grid-cols-3">
        <div id="logo" className="flex items-center gap-4">
          <img src="/new-work-state-logo.svg" />
          <h1 className="text-3xl">New Work State</h1>
        </div>
        <div id="search-bar" className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search for jobs"
            className="border border-[rgb(11_93_102)] rounded-lg p-2"
          />
        </div>
        <div id="log-in" className="flex items-center justify-end gap-3">
          <button>Sign up</button>
          <button className="">Log In</button>
        </div>
      </header>

      <main className="grid grid-cols-[1fr_4fr] gap-3">
        <aside id="job-filters" className="">
          <h2>Filters</h2>
          <div className="border border-[rgb(11_93_102)] rounded-lg p-4">
            <h3>Location</h3>
            <ul>
              <li>New York</li>
              <li>Albany</li>
              <li>Buffalo</li>
              <li>Long Island</li>
              <li>New York City</li>
              <li>Rochester</li>
              <li>Syracuse</li>
            </ul>
          </div>
        </aside>
        <section id="job-dashboard">
          <h2>Jobs</h2>
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-3">
            {data.vacancies.map((vacancy: Vacancy) => (
              <JobCard key={vacancy._id} vacancy={vacancy}></JobCard>
            ))}
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
