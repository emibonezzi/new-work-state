import React from "react";
import FilterBox from "./FilterBox";
import filtersResponse from "@/types/filtersResponse";

const FiltersSection = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/vacancies/filters`);

  const data: filtersResponse = await res.json();

  return (
    <aside id="job-filters" className="flex flex-col gap-3">
      {data.filters.map((filter, i) => (
        <FilterBox
          key={i}
          name={filter.filter_name}
          field={filter.filter_field}
          options={filter.filters_values}
        />
      ))}
    </aside>
  );
};

export default FiltersSection;
