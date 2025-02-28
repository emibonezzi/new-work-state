"use client";
import React from "react";

interface Props {
  totalPages: number;
  currentPage: number;
}

const Pagination = ({ totalPages, currentPage }: Props) => {
  return (
    <div id="pagination" className="flex justify-end gap-3">
      <button>Previous</button>
      <span>
        {currentPage} of {totalPages} pages
      </span>
      <button>Next</button>
    </div>
  );
};

export default Pagination;
