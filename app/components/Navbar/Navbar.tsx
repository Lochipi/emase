"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="cursor-pointer font-bold text-2xl opacity-100 transition-all hover:opacity-80">
        <Link href="/">
          <p className=" text-white-700">
            EmaseLC <span className="text-yellow-300">.</span>
          </p>
        </Link>
      </div>
      {/*Menu*/}
      <ul className="hidden md:flex gap-4 ">
        <li>
          <Link className="hover:text-cyan-400 duration-70" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="overflow-y-scroll">About</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#blogs">Blogs</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} href="/">
              Home
            </Link>
          </li>
          <li className="py-6">
            {" "}
            <Link onClick={handleClick} href="#about">
              About
            </Link>
          </li>
          <li className="py-6">
            <Link onClick={handleClick} href="#skills">
              Skills
            </Link>
          </li>
          <li className="py-6">
            {" "}
            <Link onClick={handleClick} href="#projects">
              Projects
            </Link>
          </li>
          <li className="py-6">
            {" "}
            <Link onClick={handleClick} href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w=[160px] h-[60px] flex justify-between items-center ml-[-780px] hover:ml-[-10px] duration-300 bg-red-500">
            <Link
              className="flex justify-between items-center w-full text-gray-300 "
              href="mailto: corneliuslochipi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={25} />
            </Link>
          </li>
          <li className="w=[160px] h-[60px] flex justify-between items-center ml-[-78px] hover:ml-[-10px] duration-300 bg-blue-600">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/cornelius-emase/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={27} />
            </Link>
          </li>
          <li className="w=[160px] h-[60px] flex justify-between items-center ml-[-780px] hover:ml-[-10px] duration-300 bg-neutral-700">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Lochipi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={25} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
