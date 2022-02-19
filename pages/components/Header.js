import React, { useState } from "react";
import Link from "next/link";
import headerstyles from "../../styles/Header.module.css";
import { DiCssdeck } from "react-icons/di";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="p-1 md:px-2 py-2 border-b-[1px] bg-[#021732] border-zinc-500 w-full">
        <div className="grid grid-cols-3 sm:grid-cols-4 ">
          <div className="col-span-2 text-sm md:text-xl font-extralight sm:ml-5 sm:col-span-1 flex flex-row items-center gap-1">
            <DiCssdeck className="md:text-2xl text-sm" />
            <span className="font-bold">Mohit Maroliya</span>
          </div>
          <div className="col-span-2 py-2 hidden sm:block">
            <div className="flex flex-row gap-3 justify-evenly items-center text-base sm:text-sm xl:text-xl leading-4">
              <li className="list-none text-slate-100 hover:text-white hover:opacity-100 bg-slate-400/10 hover:bg-slate-400/40 px-3 py-1 rounded-xl">
                <Link href="/">Home</Link>
              </li>
              <li className="list-none text-slate-100 hover:text-white hover:opacity-100 bg-slate-400/10 hover:bg-slate-400/40 px-3 py-1 rounded-xl">
                <Link href="/about">About</Link>
              </li>
              <li className="list-none text-slate-100 hover:text-white hover:opacity-100 bg-slate-400/10 hover:bg-slate-400/40 px-3 py-1 rounded-xl">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="list-none text-slate-100 hover:text-white hover:opacity-100 bg-slate-400/10 hover:bg-slate-400/40 px-3 py-1 rounded-xl">
                <Link href="/blogs">Blogs</Link>
              </li>
            </div>
          </div>
          <div className="col-span-1 flex flex-row gap-3 justify-end items-center sm:pr-8">
            <span className="p-1 rounded-lg ease-in duration-200 hover:bg-[#212d45] hover:scale-125 hover:cursor-pointer">
              <a href="https://google.com">
                <AiFillGithub size={33} />
              </a>
            </span>
            <span className="p-1 rounded-lg ease-in duration-200 hover:bg-[#212d45] hover:scale-125 hover:cursor-pointer">
              <a href="https://google.com">
                <AiFillLinkedin size={33} />
              </a>
            </span>
            <span className="p-1 rounded-lg ease-in duration-200 hover:bg-[#212d45] hover:scale-125 hover:cursor-pointer">
              <a href="https://google.com">
                <AiFillYoutube size={33} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
