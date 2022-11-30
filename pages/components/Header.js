import React from "react";
import { Disclosure, Menu } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineMenu,
  AiFillBell,
} from "react-icons/ai";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import imageurl from '../../public/mayank.png';


const user = {
  name: "Mayank Maroliya",
  email: "mayankmaroliya@gmail.com",
};
const navigation = [
  { name: "Home", href: "/", current: false, index: 0 },
  { name: "About", href: "/about", current: false, index: 1 },
  { name: "Courses", href: "/courses", current: false, index: 2 },
  { name: "Research", href: "/research", current: false, index: 3 },
  { name: "Contacts", href: "/contact", current: false, index: 4 },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  return (
    <>
      <Disclosure
        as="nav"
        className="border-b-[1px] bg-[#021732] border-zinc-500"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-8">
                      {navigation.map((item) => (
                        <Link key={item.index} href={item.href} className="hover:drop-shadow-3xl hover:bg-white">
                          <a
                            key={item.name}
                            onClick={() => {
                              item.current = true;
                            }}
                            className=" focus:text-white active:text-white text-gray-300 hover:drop-shadow-4xl hover:text-white px-3 py-2 rounded-md text-base font-medium"
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6 space-x-3">
                    
                    <span className="p-1 rounded-lg ease-in duration-200 hover:bg-[#212d45] hover:scale-125 hover:cursor-pointer">
                      <a href="https://www.linkedin.com/in/mayankmaroliya/">
                        <AiFillLinkedin
                          className="h-7 w-7"
                          aria-hidden="true"
                        />
                      </a>
                    </span>
                    <span className="p-1 rounded-lg ease-in duration-200 hover:bg-[#212d45] hover:scale-125 hover:cursor-pointer">
                      <a href="https://www.youtube.com/channel/UC2H8mkcHqBievpxf1sSpzMg">
                        <AiFillYoutube className="h-7 w-7" aria-hidden="true" />
                      </a>
                    </span>

                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            className="h-8 w-8 rounded-full bg-red-300"
                            height={'30rem'}
                            width={'35  rem'}
                            src={imageurl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                    </Menu>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  {/* Hamburger menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <ImCross
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <AiOutlineMenu
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Hamburger content here */}
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-slate-700 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>

              {/* hamburger open below card */}
              <div className="pt-4 pb-3 border-t border-gray-700 bg-[#01142c]">
                <div className="flex items-center px-5 py-2">
                  <div className="flex-shrink-0">
                    <Image
                            className="h-8 w-8 rounded-full border-[1px] border-gray-100"
                            height={'30rem'}
                            width={'35rem'}
                      src={imageurl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <AiFillBell className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Header;
