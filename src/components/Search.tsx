import React from "react";

import { useContext } from "react";
import { SearchContext } from "@/context/searchTextContext";

export const Search = (props: {
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}): JSX.Element => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className="w-full">
      <input
        className="search-box w-full rounded-md border pt-2  border-teal-300 px-8 text-xl text-indigo-500 pb-1"
        type="search"
        placeholder="Хайх..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
