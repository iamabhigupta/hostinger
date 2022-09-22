import React from "react";
import Layout from "../components/Layout";
import "aos/dist/aos.css";

export default function Pricing() {
  return (
    <Layout title={"Pricing"}>
      <section className="bg-white dark:bg-slate-900 text-textColor dark:text-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2
              data-aos="fade-up"
              className="mb-4 text-4xl tracking-tight font-extrabold   dark:text-white"
            >
              Choose Your Web Hosting Plan
            </h2>
            <p
              data-aos="fade-up"
              className="mb-5 font-light text-slate-500 sm:text-xl dark:text-slate-400"
            >
              We prepared the best web hosting plan for you to start. You will
              be able to adjust plans as you go - our custom-built algorithm
              will provide suggestions based on your usage.
            </p>
          </div>
          <div className="space-y-10 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 my-10">
            {/* Pricing Card */}
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col p-6 mx-auto max-w-lg transition duration-500 ease-out w-full text-center   bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 xl:p-8 dark:bg-slate-800 dark:text-white"
            >
              <h4 className="mb-4 text-2xl font-semibold">
                Single Web Hosting
              </h4>
              <p className="font-light text-slate-500 sm:text-lg dark:text-slate-400">
                Ideal solution for beginners
              </p>
              <div className="flex justify-center text-lg gap-2 mt-8 mb-5 items-center">
                <div className="text-slate-400 line-through">₹329</div>
                <div className="bg-[#7955e6] py-2 px-3 rounded-full text-white uppercase font-bold">
                  Save 79%
                </div>
              </div>
              <div className="flex justify-center items-baseline mb-8">
                <p className="relative">
                  <span className="-mt-2 absolute text-2xl -ml-5">₹</span>
                  <span className="text-6xl font-extrabold">69.00</span>
                  <span className="font-extrabold text-lg">/month</span>
                </p>
              </div>
              <button className="flex mb-5 justify-center items-center text-white bg-[#fc5185] border-0 py-3 px-20 focus:outline-none hover:bg-[#ff3f79] rounded-full text-lg font-bold w-full">
                Add To Cart
              </button>
              <p className="text-slate-400 mb-8">₹159.00/mo when you renew</p>

              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">1</span> Website
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">50 GB</span> SSD Storage
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">10,000</span> Visits Monthly
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">1</span> Email Account
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">100 GB</span> Bandwith
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">2</span> Database
                  </span>
                </li>
              </ul>
            </div>
            {/* Pricing Card */}
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col  mx-auto max-w-lg transition duration-500 ease-out w-full text-center  bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <div className="bg-primary border border-primary rounded-t-lg w-full">
                <p className="tracking-wider py-3 uppercase font-semibold text-white">
                  Best Value
                </p>
              </div>
              <div className="p-8">
                <h4 className="mb-4 text-2xl font-semibold">
                  Premium Web Hosting
                </h4>
                <p className="font-light text-slate-500 sm:text-lg dark:text-slate-400">
                  Perfect package for personal websites
                </p>
                <div className="flex justify-center text-lg gap-2 mt-8 mb-5 items-center">
                  <div className="text-slate-400 line-through">₹329</div>
                  <div className="bg-[#7955e6] py-2 px-3 rounded-full text-white uppercase font-bold">
                    Save 79%
                  </div>
                </div>
                <div className="flex justify-center items-baseline mb-8">
                  <p className="relative">
                    <span className="-mt-2 absolute text-2xl -ml-5">₹</span>
                    <span className="text-6xl font-extrabold">149.00</span>
                    <span className="font-extrabold text-lg">/month</span>
                  </p>
                </div>
                <button className="flex mb-5 justify-center items-center text-white bg-primary border-0 py-3 px-20 focus:outline-none hover:bg-[#5d2ee7] rounded-full text-lg font-bold w-full">
                  Add To Cart
                </button>
                <p className="text-slate-400 mb-8">₹249.00/mo when you renew</p>
                {/* List */}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <span className="font-semibold">100</span> Website
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <span className="font-semibold">100 GB</span> SSD Storage
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <span className="font-semibold">25,000</span> Visits
                      Monthly
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <span className="font-semibold">Free</span> Email Account
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <span className="font-semibold">Unlimited</span> Bandwith
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <span className="font-semibold">Unlimited</span> Database
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Pricing Card */}
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col p-6 mx-auto max-w-lg transition duration-500 ease-out w-full text-center  bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 xl:p-8 dark:bg-slate-800 dark:text-white"
            >
              <h4 className="mb-4 text-2xl font-semibold">
                Business Web Hosting
              </h4>
              <p className="font-light text-slate-500 sm:text-lg dark:text-slate-400">
                Optimized for small and medium businesses
              </p>
              <div className="flex justify-center text-lg gap-2 mt-8 mb-5 items-center">
                <div className="text-slate-400 line-through">₹329</div>
                <div className="bg-[#7955e6] py-2 px-3 rounded-full text-white uppercase font-bold">
                  Save 79%
                </div>
              </div>
              <div className="flex justify-center items-baseline mb-8">
                <p className="relative">
                  <span className="-mt-2 absolute text-2xl -ml-5">₹</span>
                  <span className="text-6xl font-extrabold">249.00</span>
                  <span className="font-extrabold text-lg">/month</span>
                </p>
              </div>
              <button className="flex mb-5 justify-center items-center text-white bg-[#fc5185] border-0 py-3 px-20 focus:outline-none hover:bg-[#ff3f79] rounded-full text-lg font-bold w-full">
                Add To Cart
              </button>
              <p className="text-slate-400 mb-8">₹499.00/mo when you renew</p>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">100</span> Website
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">200 GB</span> SSD Storage
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">100,000</span> Visits
                    Monthly
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">Free</span> Email Account
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">Unlimited</span> Bandwith
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">Unlimited</span> Database
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
