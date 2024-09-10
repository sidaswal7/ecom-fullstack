import React from "react";
import { navlinks } from "../constants";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-indigo-950 px-10 py-6">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl text-orange-600 font-bold">
              Alt Campus&trade;
            </h1>
          </div>
          <ul className="hidden md:flex gap-14 text-white text-lg font-semibold">
            {navlinks.map((navLink) => (
              <li key={navLink.id} className="hover:text-orange-600">
                <Link to={navLink.to}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
