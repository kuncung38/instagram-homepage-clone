import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
    return (
        <div className="flex items-center w-full gap-2 px-2 py-1 bg-gray-100 rounded-lg">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <input
                type="text"
                placeholder="search.."
                className="w-full bg-transparent focus:outline-none"
            />
        </div>
    );
};

export default SearchBar;
