import Vacancy from "@/types/vacancy";

export default async function Home() {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/vacancies?page=1&limit=10`
  );
  const data = await res.json();
  return (
    <div className="m-5">
      <header className="flex justify-between">
        <div id="logo" className="flex items-center gap-4">
          <img src="/new-work-state-logo.svg" alt="New Work State Logo" />
          <h1 className="text-3xl">New Work State</h1>
        </div>
        <div id="search-bar">
          <input
            type="text"
            placeholder="Search for jobs"
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
      </header>

      <main className="grid grid-cols-[1fr_4fr] gap-3">
        <aside id="job-filters" className="">
          <h2>Filters</h2>
          <div className="border border-gray-300 rounded-lg p-4">
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
          <div className="grid grid-cols-2 gap-3">
            {data.vacancies.map((vacancy: Vacancy) => (
              <div
                key={vacancy.vacancy_id}
                className="border border-gray-300 rounded-lg p-4"
              >
                <h3>{vacancy.title}</h3>
                <p>{vacancy.department}</p>
                <p>{vacancy.county}</p>
                <p>{vacancy.salary_range}</p>
                <p>{vacancy.employment_type}</p>
                <p>{vacancy.appointment_type}</p>
                <p>{vacancy.jurisdictional_class}</p>
                <p>{vacancy.travel_percentage}</p>
                <p>{vacancy.workweek}</p>
                <p>{vacancy.hours_per_week}</p>
                <p>{vacancy.from}</p>
                <p>{vacancy.to}</p>
                <p>{vacancy.flextime_allowed}</p>
                <p>{vacancy.mandatory_overtime}</p>
                <p>{vacancy.compressed_workweek_allowed}</p>
                <p>{vacancy.telecommuting_allowed}</p>
                <p>{vacancy.street_address}</p>
                <p>{vacancy.street_2}</p>
                <p>{vacancy.city}</p>
                <p>{vacancy.state}</p>
                <p>{vacancy.zip_code}</p>
                <p>{vacancy.duties_description}</p>
                <p>{vacancy.minimum_qualifications}</p>
                <p>{vacancy.additional_comments}</p>
                <p>{vacancy.name}</p>
                <p>{vacancy.telephone}</p>
                <p>{vacancy.fax}</p>
                <p>{vacancy.email_address}</p>
                <p>{vacancy.street}</p>
                <p>{vacancy.notes_on_applying}</p>
              </div>
            ))}
          </div>
        </section>
        {/* {data.vacancies.map((vacancy: Vacancy) => (
          <h1 key={vacancy.vacancy_id}>{vacancy.title}</h1>
        ))} */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
