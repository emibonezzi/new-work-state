"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  totalPages: number;
  currentPage: number;
  totalVacancies: number;
}

const Pagination = ({ totalPages, currentPage, totalVacancies }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleClick(direction: string) {
    const params = new URLSearchParams(searchParams);
    if (direction === "next") {
      params.set("page", `${currentPage + 1}`);
      router.push("?" + params.toString());
    } else {
      params.set("page", `${currentPage - 1}`);
      router.push("?" + params.toString());
    }
  }

  return (
    <div id="pagination" className="flex justify-end gap-3">
      <button
        disabled={currentPage === 1 ? true : false}
        onClick={() => handleClick("previous")}
      >
        Previous
      </button>
      <span>
        {currentPage} of {totalPages} pages
      </span>
      <button
        disabled={currentPage === totalPages ? true : false}
        onClick={() => handleClick("next")}
      >
        Next
      </button>
      <span>{totalVacancies}</span>
    </div>
  );
};

export default Pagination;
