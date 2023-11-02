import { useState, useEffect } from "react";

import styles from "../style";

import { close, logo, menu, logo3, embo, iiserb } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  // Calculate the height of the Navbar
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setNavbarHeight(navbar.getBoundingClientRect().height);
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      <nav
        className="w-full flex px-10 justify-between items-center navbar"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 1)", // Black color
        }}
      >
        {" "}
        <img
          src={iiserb}
          alt="hoobank"
          className="w-[1blur navbar in tailwing50px] rounded-full h-[80px]"
        />
        <img
          src={logo3}
          alt="hoobank"
          className="w-[1blur navbar in tailwing50px] h-[80px]"
        />
        <img
          src={embo}
          alt="hoobank"
          className="w-[1blur navbar in tailwing50px] h-[80px]"
        />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[22px] font-extrabold hover:bg-gradient-to-r from-cyan-500 to-grey-50 p-2 rounded-[20px] text-black ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins hover:bg-sky-700 font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
