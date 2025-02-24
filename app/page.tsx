export default async function Home() {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/vacancies?page=1&limit=10`
  );
  const data = await res.json();
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {data.vacancies.map((vacancy) => (
          <h1>{vacancy.title}</h1>
        ))}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
