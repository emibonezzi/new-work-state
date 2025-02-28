import FilterBox from "./components/FilterBox";
import JobsDashboard from "./components/JobsDashboard";

interface Props {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default async function Home(props: Props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  console.log("Requesting page", currentPage, "with query", query);

  return (
    <div className="m-5">
      <header className="grid grid-cols-2">
        <div id="logo" className="flex items-center gap-4">
          <img />
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
          <JobsDashboard query={query} currentPage={currentPage} />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
