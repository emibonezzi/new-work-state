"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    router.push("?" + params.toString());
  }
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border border-[rgb(11_93_102)] rounded-lg p-2"
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
};

export default Search;
