/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderPop2() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="cursor-pointer flex justify-center items-center mr-1 focus:outline-none focus-visible:ring-0 text-xl">
          VPS
          <HiChevronDown className="text-2xl " />
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
        <Menu.Items className="absolute -right-44 z-10 mt-4 w-[28rem] py-6 px-10 origin-top-right rounded bg-white dark:bg-lightGray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="w-16 absolute top-0 right-40 -mt-5 overflow-hidden inline-block">
            <div className=" h-5 w-5 bg-white dark:bg-lightGray rotate-45 transform origin-bottom-left"></div>
          </div>
          <div className="">
            <Menu.Item>
              <a href="#">
                <div className="flex my-6 justify-start items-center gap-5 text-textColor dark:text-white hover:scale-105 transition duration-200 ease-out">
                  <img src="/assets/icons/VPS.svg" alt="" />
                  <div>
                    <h4 className=" text-xl md:text-xl font-extrabold ">
                      VPS Hosting
                    </h4>
                    <p className="capitalize">Dedicated Resourse To scale</p>
                  </div>
                </div>
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">
                <div className="flex my-6 justify-start items-center gap-5 text-textColor dark:text-white hover:scale-105 transition duration-200 ease-out">
                  <img src="/assets/icons/Cyber.svg" alt="" />
                  <div>
                    <h4 className=" text-xl md:text-xl font-extrabold ">
                      Cyber Panel Hosting
                    </h4>
                    <p className="capitalize">
                      Control Panel with open/litespeed webserver
                    </p>
                  </div>
                </div>
              </a>
            </Menu.Item>
            <Menu.Item>
              <a href="#">
                <div className="flex my-6 justify-start items-center gap-5 text-textColor dark:text-white hover:scale-105 transition duration-200 ease-out">
                  <img src="/assets/icons/Minecraft.svg" alt="" />
                  <div>
                    <h4 className=" text-xl md:text-xl font-extrabold ">
                      Minecraft Server Hosting
                    </h4>
                    <p className="capitalize">
                      Share your Minecraft expreience
                    </p>
                  </div>
                </div>
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
