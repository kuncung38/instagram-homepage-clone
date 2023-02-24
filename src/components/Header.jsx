import React from "react";
import SearchBar from "./SearchBar";
import { HeartIcon } from "@heroicons/react/24/outline";

const Header = () => {
    return (
        <nav className="flex sticky top-0 items-center justify-between gap-6 py-3 px-4 border-b border-gray-200 bg-white md:hidden">
            <div className="w-[12%]">
                <img src="/instagram.png" />
            </div>
            <SearchBar />
            <div className="h-full w-auto">
                <HeartIcon className="w-6" />
            </div>
        </nav>
    );
};

export default Header;
