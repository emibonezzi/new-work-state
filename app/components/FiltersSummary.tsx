"use client";
import Query from "@/types/query";
import { useRouter, useSearchParams } from "next/navigation";

import React from "react";

interface Props {
  query: Query | undefined;
}

const FiltersSummary = ({ query }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleClick() {
    const params = new URLSearchParams(searchParams);
    for (const param of params.keys()) {
      console.log(param);
      params.delete(param);
    }
    router.push("?");
  }

  return (
    <div className="flex gap-3 justify-between">
      <div className="flex gap-3">
        <p>
          {query && Object.keys(query).length !== 0
            ? "Showing jobs with the current filters:"
            : "Showing all recent jobs"}{" "}
        </p>
        {query
          ? Object.keys(query).map((filter, i) => (
              <h1 key={i}>{query[filter]}</h1>
            ))
          : ""}
      </div>
      <div>
        <button onClick={handleClick}>Clear filters</button>
      </div>
    </div>
  );
};

export default FiltersSummary;
