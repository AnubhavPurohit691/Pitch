"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import SearchFormreset from "./SearchFormreset";

const Searchcomponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the current query parameter value if it exists
  const currentQuery = searchParams?.get("q") || "";
  const [searchValue, setSearchValue] = useState(currentQuery);
  const refer = useRef<HTMLInputElement>(null);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const sp = new URLSearchParams(searchParams?.toString());
    if (searchValue.trim()) {
      sp.set("q", searchValue); // Update the query parameter
    } else {
      sp.delete("q"); // Remove the query if the input is cleared
    }
    router.push(`/?${sp.toString()}`); // Update the URL without reloading
  };

  const handlereset = () => {
    setSearchValue("");
    refer.current?.focus();
  }
  return (
    <form onSubmit={handleSearch} className="search flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        id="search"
        ref={refer}
        onChange={(e) => setSearchValue(e.target.value)} // Update state
        className="text-black  bg-gray-100 p-2 rounded-md w-full"
      />
      {searchValue && <SearchFormreset onreset={handlereset} />}
      <button
        type="submit"
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Search
      </button>
    </form>
  );
};

export default Searchcomponent;
