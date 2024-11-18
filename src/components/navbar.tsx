import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-30 text-white w-full justify-end backdrop-blur md:backdrop-blur-none">
      <ul className="flex space-x-4 text-sm items-center justify-end h-8 p-8 md:w-[20rem] place-self-end">
        <li className="flex-1">
          <Link
            href="/#hero"
            className="flex flex-col group text-sm md:text-base"
          >
            About{" "}
            <span className="w-0 group-hover:w-3/4 duration-300 ease-in-out h-0.5 bg-green-500"></span>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/#project"
            className="flex flex-col group text-sm md:text-base"
          >
            Projects{" "}
            <span className="w-0 group-hover:w-3/4 duration-300 ease-in-out h-0.5 bg-green-500 "></span>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/#contact"
            className="flex flex-col group text-sm md:text-base"
          >
            Contact{" "}
            <span className="w-0 group-hover:w-3/4 duration-300 ease-in-out h-0.5 bg-green-500"></span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
