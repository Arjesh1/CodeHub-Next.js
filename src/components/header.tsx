"use client";

import Link from "next/link";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Header = () => {
  const user = {
    uid: "12122",
  };

  const handleOnLogOut = () => {
    console.log("logout succesful");
  };
  return (
    <>
      <header className=" w-full bg-indigo-300">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl hover:text-white">
                CodeHub
              </span>
            </Link>
          </div>

          <div className="lg:flex lg:gap-x-12">
            {!user?.uid ? (
              <>
                <Link href="/login">
                  <div className="flex gap-1 items-center text-gray-900 hover:text-white ">
                    <span className="  text-lg">
                      <FaUserAlt />
                    </span>
                    <p className="  hidden sm:block "> Login</p>
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <FaUserCircle className="h-8 w-8 sm:h-8 sm:w-8 text-gray-900 hover:text-white focus:outline-none" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/profile"
                            className={classNames(
                              active ? "bg-gray-100 " : "",
                              "block px-4 py-2 text-sm text-gray-700",
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleOnLogOut}
                            className={classNames(
                              active ? "bg-gray-100 w-full" : "",
                              "block px-4 py-2 text-sm text-gray-700 text-left hover:bg-red-400",
                            )}
                          >
                            Log out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
