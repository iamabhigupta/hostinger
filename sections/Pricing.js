/* eslint-disable @next/next/no-img-element */
import React from "react";
import CloudeFlare from "../components/svg/CloudeFlare";
import LiteSpeed from "../components/svg/LiteSpeed";
import Wordpress from "../components/svg/Wordpress";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  return (
    <section className="py-16">
      <div className="flex justify-center items-center gap-20">
        <Wordpress />
        <LiteSpeed />
        <CloudeFlare />
      </div>
      <h2 className="mt-14">All-In-One Web Hosting</h2>
      <p className="text-center text-gray-600 font-medium w-2/5 mx-auto mt-6 dark:text-gray-100">
        We prepared the best web hosting plan for you to start. You will be able
        to adjust plans as you go - our custom-built algorithm will provide
        suggestions based on your usage.
      </p>
      {/* Pricing Section  */}
      <div className="w-9/12 mx-auto shadow mt-10">
        <div className="bg-primary rounded-t-md  mx-auto py-3">
          <h3 className="text-white">Best Web Hosting</h3>
        </div>
        {/* Content  */}
        <div className="flex  justify-evenly items-center border-x border-b border-gray-300 py-10">
          <div className="space-y-3">
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-base">
                <span className="font-bold">Unmetered</span> traffic (Unlimited
                GB)
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-base">
                <span className="font-bold">100 </span> Websites
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-base">
                <span className="font-bold">100 GB </span> SSD Storage
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-base">
                <span className="font-bold">Free </span>Weekly Backups
              </p>
            </div>
          </div>
          <div className="border-r border-gray-300 h-40"></div>
          <div className="text-textColor flex flex-col justify-center items-center ">
            <p className="relative">
              <span className="-mt-3 absolute text-2xl -ml-3">₹</span>
              <span className="text-6xl font-extrabold">149.00</span>
              <span className="font-extrabold text-lg">/mo</span>
            </p>
            <p className="font-extrabold text-base tracking-tighter">
              ₹249.00/mo when you renew
            </p>
            <button className="flex justify-center items-center text-white bg-primary border-0 py-2 px-28 focus:outline-none hover:bg-[#5d2ee7] rounded-full text-lg font-extrabold mt-7 w-full">
              Select
            </button>
          </div>
          <div className="border-r border-gray-300 h-40"></div>

          <div className="space-y-3">
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-base">
                <span className="font-bold">Unlimited </span> Free SSL
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-base">
                <span className="font-bold">Free </span>Domain
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-base">
                <span className="font-bold">Free </span> Email
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <p className="text-base">
                <span className="font-bold">Optimized </span> for WordPress
              </p>
            </div>
          </div>
        </div>
        {/* Content  */}
        <div className="rounded-b-md mx-auto py-7 border-x border-b border-gray-300">
          <p className="text-textColor text-center underline font-semibold">
            See All Features
          </p>
        </div>
        {/* Our services include:  */}
      </div>
      <h2 className="my-16 font-extrabold capitalize">Our services include</h2>
      <div className="container px-10 mx-auto">
        <div className="flex flex-wrap ">
          <div className="lg:w-1/3">
            <ul className="text-textColor font-extrabold text-2xl space-y-7">
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
            <ul className="text-textColor font-extrabold text-2xl space-y-7">
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
            <ul className="text-textColor font-extrabold text-2xl space-y-7">
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
