/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#f5f5ff]">
        <div className="container px-5 pt-24 pb-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 pb-5">
              <img src="/assets/Logo.svg" alt="logo" className="h-9 " />
            </a>
            <p className="text-indigo-900 hover:text-gray-500 cursor-pointer text-sm leading-tight mt-5">
              We are a web hosting company with a mission to help everyone who
              goes online succeed. We accomplish this by continuously developing
              server technology, giving expert assistance, and ensuring a
              flawless online website hosting experience.
            </p>
            <div className="mt-8 flex justify-start items-center gap-3">
              <img src="/assets/Visa.webp" alt="" />
              <img src="/assets/Master.webp" alt="" />
              <img src="/assets/Discover.webp" alt="" />
              <img src="/assets/Club.webp" alt="" />
              <img src="/assets/RuPay.webp" alt="" />
            </div>
            <p className="text-textColor text-sm leading-tight mt-5 cursor-pointer">
              Add More
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-left text-lg font-extrabold mb-3 tracking-tight">
                HOSTING
              </h2>
              <ul className="list-none mb-10 text-base space-y-2 mt-2">
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Web Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    VPS Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Minecraft Server Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    CyberPanel Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Cloud Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    WordPress Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Email Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    CMS Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Ecommerce Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Free Web Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Online Store
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Website Builder
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Buy Hosting
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-left text-lg font-extrabold mb-3 tracking-tight">
                DOMAIN
              </h2>
              <ul className="list-none mb-10 text-base space-y-2 mt-2">
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Domain Name Search
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Domain Transfer
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    XYZ Domain
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Cheap Domains
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Domain Extensions
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    WHOIS Lookup
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Free SSL Certificate
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="text-left text-lg font-extrabold mb-3 tracking-tight">
                HOSTING
              </h2>
              <ul className="list-none mb-10 text-base space-y-2 mt-2">
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    INFORMATION
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Migrate to Hostinger
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    System Status
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Payment Methods
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Rewards
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Reviews
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Sitemap
                  </a>
                </li>
                <h2 className="text-left pt-6 text-lg font-extrabold mb-3 tracking-tight">
                  LEGAL
                </h2>
                <ul className="list-none mb-10 text-base space-y-2 mt-2">
                  <li>
                    <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 relative">
              <h2 className="text-left text-lg font-extrabold mb-3 tracking-tight">
                COMPANY
              </h2>
              <ul className="list-none mb-10  text-base space-y-2 mt-2">
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    About Hostinger
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Our Technology
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Customer Care
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                    Blog
                  </a>
                </li>
                <h2 className="text-left pt-6 text-lg font-extrabold mb-3 tracking-tight">
                  HELP
                </h2>
                <ul className="list-none mb-10 text-base space-y-2 mt-2">
                  <li>
                    <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                      Knowledge Base
                    </a>
                  </li>
                  <li>
                    <a className="text-indigo-900 hover:text-gray-500 cursor-pointer">
                      Report Online Abuse
                    </a>
                  </li>
                </ul>
                {/* Icons  */}
                <div className="flex justify-center items-center gap-3 bottom-20 text-3xl absolute text-textColor">
                  <RiLinkedinBoxFill /> <RiFacebookBoxFill />
                  <RiInstagramFill />
                  <RiTwitterFill /> <RiYoutubeFill />
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5ff] text-base text-gray-400">
          <div className="container border-t border-gray-200 mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row text">
            <p className=" text-center sm:text-left">
              © 2004-2022 hostinger.in - India&#39;s #1 Web Hosting & Domains
              provider.
            </p>
            <p className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              Prices are listed without VAT
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
