/* eslint-disable @next/next/no-img-element */
import React from "react";
import CloudeFlare from "../components/svg/CloudeFlare";
import LiteSpeed from "../components/svg/LiteSpeed";
import Wordpress from "../components/svg/Wordpress";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  return (
    <section className="py-16">
      <div
        className="flex justify-center flex-wrap items-center gap-5 md:gap-20"
        data-aos="fade-up"
      >
        <Wordpress />
        <LiteSpeed />
        <CloudeFlare />
      </div>
      <h2 className="mt-14" id="pricing" data-aos="fade-up">
        All-In-One Web Hosting
      </h2>
      <p
        className="text-center text-gray-600 font-medium md:w-2/5 mx-auto mt-6 dark:text-gray-100 px-4 text-lg"
        data-aos="fade-up"
      >
        We prepared the best web hosting plan for you to start. You will be able
        to adjust plans as you go - our custom-built algorithm will provide
        suggestions based on your usage.
      </p>
      {/* Pricing Section  */}
      <div
        data-aos="zoom-in-up"
        data-aos-offset="100"
        data-aos-duration="800"
        className="md:w-9/12 w-10/12 mx-auto shadow mt-10 rounded-md"
      >
        <div className="bg-primary dark:bg-lightGray dark:border-white dark:border rounded-t-md  mx-auto py-4">
          <h3 className="text-white">Best Web Hosting</h3>
        </div>
        {/* Content  */}
        <div className="flex  justify-evenly items-center border-x border-b border-gray-300 py-12 dark:bg-lightGray">
          <div className="space-y-3 hidden md:block">
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-lg">
                <span className="font-bold">Unmetered</span> traffic (Unlimited
                GB)
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-lg">
                <span className="font-bold">100 </span> Websites
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-lg">
                <span className="font-bold">100 GB </span> SSD Storage
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-lg">
                <span className="font-bold">Free </span>Weekly Backups
              </p>
            </div>
          </div>
          <div className="border-r border-gray-300 h-40 hidden md:block"></div>
          <div className="text-textColor  dark:text-white flex flex-col justify-center items-center ">
            <p className="relative">
              <span className="-mt-3 absolute text-2xl -ml-3">₹</span>
              <span className="text-6xl font-extrabold">149.00</span>
              <span className="font-extrabold text-lg">/mo</span>
            </p>
            <p className="font-extrabold text-lg tracking-tighter">
              ₹249.00/mo when you renew
            </p>
            <button className="flex justify-center items-center text-white bg-primary border-0 py-2 px-10 md:px-28 focus:outline-none hover:bg-[#5d2ee7] rounded-full text-lg font-extrabold mt-7 w-4/5 md:w-full">
              Select
            </button>
            <p className="font-extrabold text-xl my-8 tracking-tighter">
              Plan Features
            </p>
            <div className="space-y-3 block md:hidden">
              <div className="flex justify-start items-center gap-1">
                <div>
                  <FaCheck className="text-[#1ea19a] text-sm" />
                </div>
                <p className="text-lg">
                  <span className="font-bold">Unlimited </span> Free SSL
                </p>
              </div>
              <div className="flex justify-start items-center gap-1">
                <div>
                  <FaCheck className="text-[#1ea19a] text-sm" />
                </div>
                <p className="text-lg">
                  <span className="font-bold">Free </span>Domain
                </p>
              </div>
              <div className="flex justify-start items-center gap-1">
                <div>
                  <FaCheck className="text-[#1ea19a] text-sm" />
                </div>
                <p className="text-lg">
                  <span className="font-bold">Free </span> Email
                </p>
              </div>
              <div className="flex justify-start items-center gap-1">
                <div>
                  <FaCheck className="text-[#1ea19a] text-sm" />
                </div>
                <p className="text-lg">
                  <span className="font-bold">Optimized </span> for WordPress
                </p>
              </div>
            </div>
          </div>
          <div className="border-r border-gray-300 h-40 hidden md:block"></div>

          <div className="space-y-3 hidden md:block">
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-lg">
                <span className="font-bold">Unlimited </span> Free SSL
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-lg">
                <span className="font-bold">Free </span>Domain
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-lg">
                <span className="font-bold">Free </span> Email
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-lg">
                <span className="font-bold">Optimized </span> for WordPress
              </p>
            </div>
          </div>
        </div>
        {/* Content  */}
        <div className="rounded-b-md mx-auto dark:bg-lightGray py-7 border-x border-b border-gray-300">
          <p className="text-textColor dark:text-white text-center underline font-semibold cursor-pointer text-xl">
            See All Features
          </p>
        </div>
        {/* Our services include:  */}
      </div>
      <h2 className="md:my-16 mt-16 mb-6 capitalize px-5" data-aos="fade-up">
        Our services include
      </h2>
      <div className="container px-5 md:px-10 mx-auto" data-aos="fade-up">
        <div className="flex flex-wrap md:space-y-0 space-y-3">
          <div className="lg:w-1/3">
            <ul className="text-textColor dark:text-white font-extrabold text-xl md:text-2xl md:space-y-7 space-y-3">
              <li className="flex justify-start items-center gap-3">
                <img src="/assets/icons/Free SSL.svg" alt="" />
                <span>Free SSL</span>
              </li>
              <li className="flex justify-start items-center gap-3">
                <img src="/assets/icons/Free Migration.svg" alt="" />
                <span>Free Migration</span>
              </li>
              <li className="flex justify-start items-center gap-3">
                <img src="/assets/icons/PHP Speed Boost.svg" alt="" />
                <span>PHP Speed Boost</span>
              </li>
              <li className="flex justify-start items-center gap-3">
                <img src="/assets/icons/247365 Tech Support.svg" alt="" />
                <span>24/7/365 Tech Support</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3">
            <ul className="text-textColor dark:text-white font-extrabold text-xl md:text-2xl md:space-y-7 space-y-3">
              <li className="flex justify-start items-center gap-3">
                <img src="/assets/icons/Access Management.svg" alt="" />
                <span>Access Management</span>
              </li>
              <li className="flex justify-start items-center gap-3">
                <img src="/assets/icons/Automated backups.svg" alt="" />
                <span>Automated backups</span>
              </li>
              <li className="flex justify-start items-center gap-3">
                <img src="/assets/icons/LiteSpeed Cache Plugin.svg" alt="" />
                <span>LiteSpeed Cache Plugin</span>
              </li>
              <li className="flex justify-start items-center gap-3">
                <img src="/assets/icons/Auto Script Installer.svg" alt="" />
                <span>Auto Script Installer</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3">
            <ul className="text-textColor dark:text-white font-extrabold text-xl md:text-2xl md:space-y-7 space-y-3">
              <li className="flex justify-start items-center gap-3">
                <img src="/assets/icons/eCommerce Optimization.svg" alt="" />
                <span>eCommerce Optimization</span>
              </li>
              <li className="flex justify-start items-center gap-3">
                <img src="/assets/icons/DDoS Protection.svg" alt="" />
                <span>DDoS Protection</span>
              </li>
              <li className="flex justify-start items-center gap-3">
                <img
                  src="/assets/icons/One-Click WordPress Installation.svg"
                  alt=""
                />
                <span>One-Click WordPress Installation</span>
              </li>
              <li className="flex justify-start items-center gap-3">
                <img src="/assets/icons/99.svg" alt="" />
                <span>99.9% Uptime Guarantee</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
