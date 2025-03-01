"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import React from "react";

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
      params.delete("page");
    } else {
      params.delete("query");
    }

    router.push("?" + params.toString());
  }, 500);

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
