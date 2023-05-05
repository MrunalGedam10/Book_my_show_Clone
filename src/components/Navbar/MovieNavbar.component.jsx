import React from "react";
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from "react-icons/bi";
import { MovieContext } from "../../context/Movie.context";

const NavSm = () => {
  return (
    <>
      <div className="text-gray-700 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{MovieContext.original_title}</h3>
        </div>
      </div>

      <div className="w-8 h-8">
        <BiShareAlt className="w-full h-full" />
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container flex mx-auto px-4 item-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full" />
          </div>

          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>

        <div className="flex item-center gap-3">
          <span className="text-lightBlue text-base flex items-center cursor-pointer hover:text-white">
            Hospet <BiChevronDown />
          </span>

          <button className="bg-red-600 text-white px-2 p-1 text-sm rounded">
            Sign In
          </button>

          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full " />
          </div>
        </div>
      </div>
    </>
  );
};

const MovieNavbar = () => {
  return (
    <nav className="bg-white border-2 lg:border-b-0 lg:bg-darkBackground-700 p-4">
      <div className="md:hidden">
        <NavSm />
      </div>
      <div className="hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default MovieNavbar;
