import React from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here: </h3>
          <span className="text-grey-400 text-xs flex items-center cursor-pointer hover:text-white">
            Pune
            <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <button>Use App</button>
          <BiSearch className="w-8 h-8" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="flex items-center w-full gap-3">
        <div className="w-10 h-10">
          <img
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
            className="w-full h-full"
          />
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
    </>
  );
}

const NavLg = () => {
  return (
    <>
      <div className="container flex mx-auto px-4 item-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>

          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>

          {/* <button onClick={`/playPage/${props.id}`} className="bg-red-600 text-white px-2 p-1 text-sm rounded">
            Play Page
          </button> */}
        </div>

        <div className="flex item-center gap-3">
          <span className="text-lightBlue text-base flex items-center cursor-pointer hover:text-white">
            Hospet <BiChevronDown />
          </span>

          <Link
            to="/playPage"
            className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
          >
            Plays
          </Link>

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

const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-5">
      <div className="md:hidden">
        <NavSm />
      </div>

      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>

      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;