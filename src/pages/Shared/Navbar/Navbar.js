import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className=" flex justify-between items-center py-3 px-4 text-white bg-[rgb(7,10,19)] text-2xl">
        <div className="flex items-center">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <span className="text-xl">K</span>
            </div>
          </div>
          <span className=" ml-5 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Chowdhury Kasib
          </span>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                className="block text-2xl py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block text-2xl py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                to={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="block text-2xl py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
                to={"/projects"}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="block text-2xl py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                to={"/blog"}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="block text-2xl py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                to={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
