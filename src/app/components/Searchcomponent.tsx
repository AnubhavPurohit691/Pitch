"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import SearchFormreset from "./SearchFormreset";
import { Search } from "lucide-react";
import { title } from "process";
import StartupCard from "./StartupCard";

const Searchcomponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the current query parameter value if it exists
  const currentQuery = searchParams.get("q") || "";
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

  const handleReset = () => {
    setSearchValue("");
    refer.current?.focus();
  };
  
  const posts=[
    {
      _createdAt:(new Date()).toLocaleDateString(),
      views:55,
      author:{_id:1,name:"Anubhav purohit"},
      _id:1,
      description:"This is a description",
      image:'',
      category:"Robots",
      title:"we Robots"
    },
    {
      _createdAt:(new Date()).toLocaleDateString(),
      views:55,
      author:{_id:1,name:"Anubhav purohit"},
      _id:2,
      description:"This is a description",
      image:'',
      category:"Robots",
      title:"we Robots",
    },
  ]

  return (
    <>
      <section className="bg-gray-100 py-6">
        <form
          onSubmit={handleSearch}
          className="search flex items-center space-x-2 max-w-3xl mx-auto"
        >
          <input
            type="text"
            placeholder="SEARCH STARTUP"
            value={searchValue}
            id="search"
            ref={refer}
            onChange={(e) => setSearchValue(e.target.value)}
            className="text-black bg-gray-200 p-3 rounded-md w-full shadow-sm focus:outline-none focus:ring focus:ring-red-300"
          />
          {searchValue && <SearchFormreset onreset={handleReset} />}
          <button
            type="submit"
            className="px-4 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center justify-center"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>
      </section>

      <section className="py-4 text-center">
        <p className="text-xl font-semibold text-gray-800">
          {searchValue
            ? `Showing results for "${searchValue}"`
            : "Showing all startups"}
        </p>
        <ul className="mt-7 grid md:grid-cols-3 sm:grid col-2 gap-5">
            {posts.length>0?posts.map((posts)=>{
              return <StartupCard key={posts?._id} posts={posts} />
            }):<Search/>}
        </ul>
      </section>
    </>
  );
};

export default Searchcomponent;
