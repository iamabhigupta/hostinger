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
      <footer className="bg-[#f5f5ff] dark:bg-lightGray">
        <div className="container px-5 pt-24 pb-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-duration="400"
            className="w-full md:w-96 flex-shrink-0 md:mx-0 mx-auto text-left"
          >
            <a className="flex title-font font-medium items-center md:justify-start text-gray-900 pb-5">
              <svg
                className="block dark:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width={150}
                height={30}
                fill="#2f1c6a"
                fillRule="evenodd"
              >
                <path d="M45.046 8.898h2.8V21.36h-2.8v-5.287h-4.72v5.287h-2.8V8.898h2.8v4.765h4.72V8.898zm9.372 6.222a5.66 5.66 0 0 0 .225 1.654c.15.49.366.914.65 1.268s.627.626 1.036.818.876.288 1.405.288c.516 0 .98-.096 1.396-.288a2.84 2.84 0 0 0 1.044-.818 3.78 3.78 0 0 0 .65-1.268 5.66 5.66 0 0 0 .225-1.654 5.75 5.75 0 0 0-.225-1.664c-.15-.497-.367-.923-.65-1.277s-.63-.627-1.044-.818-.88-.288-1.396-.288c-.53 0-.997.1-1.405.297a2.95 2.95 0 0 0-1.036.828 3.78 3.78 0 0 0-.65 1.277c-.15.497-.225 1.046-.225 1.646zm9.528 0c0 1.067-.16 2.005-.477 2.814s-.754 1.487-1.306 2.032a5.29 5.29 0 0 1-1.972 1.232c-.772.276-1.582.414-2.458.414a6.98 6.98 0 0 1-2.413-.414c-.756-.276-1.417-.686-1.98-1.232s-1.008-1.223-1.333-2.032-.487-1.747-.487-2.814.168-2.006.504-2.815.8-1.5 1.36-2.042a5.59 5.59 0 0 1 1.981-1.241c.75-.276 1.54-.414 2.368-.414.852 0 1.657.138 2.414.414a5.49 5.49 0 0 1 1.98 1.24c.563.55 1 1.232 1.333 2.042s.486 1.747.486 2.815zM71 19.222c.396 0 .723-.033.98-.1s.465-.155.62-.27.264-.248.324-.404.1-.33.1-.522c0-.407-.192-.747-.576-1.016s-1.045-.56-1.98-.873l-1.225-.494c-.408-.186-.774-.42-1.1-.7s-.588-.623-.792-1.026-.306-.9-.306-1.465.108-1.094.324-1.556.522-.854.92-1.178.876-.572 1.44-.746 1.2-.26 1.9-.26c.84 0 1.567.1 2.18.27s1.117.378 1.513.594l-.8 2.212c-.35-.18-.736-.34-1.162-.477s-.94-.207-1.54-.207c-.673 0-1.156.094-1.45.28s-.442.47-.442.854c0 .228.054.42.162.576s.26.297.46.423a3.94 3.94 0 0 0 .685.34l.856.315 1.693.7c.48.234.88.507 1.198.818a2.97 2.97 0 0 1 .712 1.097c.156.42.234.93.234 1.528 0 1.163-.408 2.065-1.225 2.707s-2.047.963-3.692.963a10.25 10.25 0 0 1-1.495-.099 9.66 9.66 0 0 1-1.18-.243 7 7 0 0 1-.883-.305l-.62-.306.793-2.23c.372.204.83.387 1.378.548s1.216.243 2.008.243zM88.307 8.9v2.392h-3.764v10.07h-2.8V11.3h-3.765V8.9h10.34zm3.12 12.462h2.8V8.9h-2.8v12.463zm15.388 0l-2.612-4.226a41.59 41.59 0 0 0-3-3.94v8.165H98.44V8.9h2.288a22.12 22.12 0 0 1 1.315 1.457L103.5 12.2l1.486 2.032 1.387 2.023V8.9h2.792v12.463h-2.36zm12.648-10.305c-1.308 0-2.254.363-2.837 1.088s-.873 1.717-.873 2.977c0 .6.072 1.166.216 1.663a3.66 3.66 0 0 0 .648 1.285 2.93 2.93 0 0 0 1.081.837c.432.198.936.297 1.513.297l.8-.018a3.81 3.81 0 0 0 .586-.072V14.78h2.8v6.17c-.336.132-.876.273-1.62.422s-1.663.225-2.756.225c-.936 0-1.786-.144-2.548-.43a5.29 5.29 0 0 1-1.954-1.26c-.54-.553-.958-1.23-1.252-2.032s-.44-1.72-.44-2.75c0-1.043.162-1.967.487-2.77s.767-1.484 1.332-2.04a5.62 5.62 0 0 1 1.99-1.268 6.85 6.85 0 0 1 2.44-.432c.588 0 1.12.04 1.594.117a10.07 10.07 0 0 1 1.224.27c.343.102.625.206.847.315l.477.252-.8 2.248c-.385-.204-.826-.38-1.324-.53s-1.042-.224-1.63-.224zm7.877 10.305V8.9h8.43v2.356h-5.62V13.7h5v2.302h-5v3.003h6.034v2.356h-8.844zm16.052-10.215l-.55.018-.46.036v3.38h.793c1.056 0 1.813-.13 2.27-.395s.685-.713.685-1.35c0-.612-.23-1.046-.694-1.304s-1.144-.386-2.044-.386zm-.162-2.392c1.873 0 3.308.332 4.304.998s1.495 1.7 1.495 3.102c0 .875-.2 1.586-.603 2.13s-.98.974-1.738 1.286l.792 1.07.82 1.26.784 1.366.702 1.394h-3.14l-.696-1.24-.723-1.223-.732-1.124-.724-.963h-1.387v4.55h-2.8V9.078c.612-.12 1.245-.204 1.9-.25l1.756-.072zM0 14.046V0l7.08 3.78v6.328l9.37.005 7.194 3.933H0zM18.366 8.95V0l7.27 3.686v9.494l-7.27-4.23zm0 17.167v-6.274l-9.443-.007c.01.042-7.313-3.996-7.313-3.996l24.026.113V30l-7.27-3.882zM0 26.118V16.94l7.08 4.13v8.735L0 26.118z" />
              </svg>
              <svg
                className="hidden dark:block"
                xmlns="http://www.w3.org/2000/svg"
                width={150}
                height={30}
                fill="#fff"
                fillRule="evenodd"
              >
                <path d="M45.046 8.898h2.8V21.36h-2.8v-5.287h-4.72v5.287h-2.8V8.898h2.8v4.765h4.72V8.898zm9.372 6.222a5.66 5.66 0 0 0 .225 1.654c.15.49.366.914.65 1.268s.627.626 1.036.818.876.288 1.405.288c.516 0 .98-.096 1.396-.288a2.84 2.84 0 0 0 1.044-.818 3.78 3.78 0 0 0 .65-1.268 5.66 5.66 0 0 0 .225-1.654 5.75 5.75 0 0 0-.225-1.664c-.15-.497-.367-.923-.65-1.277s-.63-.627-1.044-.818-.88-.288-1.396-.288c-.53 0-.997.1-1.405.297a2.95 2.95 0 0 0-1.036.828 3.78 3.78 0 0 0-.65 1.277c-.15.497-.225 1.046-.225 1.646zm9.528 0c0 1.067-.16 2.005-.477 2.814s-.754 1.487-1.306 2.032a5.29 5.29 0 0 1-1.972 1.232c-.772.276-1.582.414-2.458.414a6.98 6.98 0 0 1-2.413-.414c-.756-.276-1.417-.686-1.98-1.232s-1.008-1.223-1.333-2.032-.487-1.747-.487-2.814.168-2.006.504-2.815.8-1.5 1.36-2.042a5.59 5.59 0 0 1 1.981-1.241c.75-.276 1.54-.414 2.368-.414.852 0 1.657.138 2.414.414a5.49 5.49 0 0 1 1.98 1.24c.563.55 1 1.232 1.333 2.042s.486 1.747.486 2.815zM71 19.222c.396 0 .723-.033.98-.1s.465-.155.62-.27.264-.248.324-.404.1-.33.1-.522c0-.407-.192-.747-.576-1.016s-1.045-.56-1.98-.873l-1.225-.494c-.408-.186-.774-.42-1.1-.7s-.588-.623-.792-1.026-.306-.9-.306-1.465.108-1.094.324-1.556.522-.854.92-1.178.876-.572 1.44-.746 1.2-.26 1.9-.26c.84 0 1.567.1 2.18.27s1.117.378 1.513.594l-.8 2.212c-.35-.18-.736-.34-1.162-.477s-.94-.207-1.54-.207c-.673 0-1.156.094-1.45.28s-.442.47-.442.854c0 .228.054.42.162.576s.26.297.46.423a3.94 3.94 0 0 0 .685.34l.856.315 1.693.7c.48.234.88.507 1.198.818a2.97 2.97 0 0 1 .712 1.097c.156.42.234.93.234 1.528 0 1.163-.408 2.065-1.225 2.707s-2.047.963-3.692.963a10.25 10.25 0 0 1-1.495-.099 9.66 9.66 0 0 1-1.18-.243 7 7 0 0 1-.883-.305l-.62-.306.793-2.23c.372.204.83.387 1.378.548s1.216.243 2.008.243zM88.307 8.9v2.392h-3.764v10.07h-2.8V11.3h-3.765V8.9h10.34zm3.12 12.462h2.8V8.9h-2.8v12.463zm15.388 0l-2.612-4.226a41.59 41.59 0 0 0-3-3.94v8.165H98.44V8.9h2.288a22.12 22.12 0 0 1 1.315 1.457L103.5 12.2l1.486 2.032 1.387 2.023V8.9h2.792v12.463h-2.36zm12.648-10.305c-1.308 0-2.254.363-2.837 1.088s-.873 1.717-.873 2.977c0 .6.072 1.166.216 1.663a3.66 3.66 0 0 0 .648 1.285 2.93 2.93 0 0 0 1.081.837c.432.198.936.297 1.513.297l.8-.018a3.81 3.81 0 0 0 .586-.072V14.78h2.8v6.17c-.336.132-.876.273-1.62.422s-1.663.225-2.756.225c-.936 0-1.786-.144-2.548-.43a5.29 5.29 0 0 1-1.954-1.26c-.54-.553-.958-1.23-1.252-2.032s-.44-1.72-.44-2.75c0-1.043.162-1.967.487-2.77s.767-1.484 1.332-2.04a5.62 5.62 0 0 1 1.99-1.268 6.85 6.85 0 0 1 2.44-.432c.588 0 1.12.04 1.594.117a10.07 10.07 0 0 1 1.224.27c.343.102.625.206.847.315l.477.252-.8 2.248c-.385-.204-.826-.38-1.324-.53s-1.042-.224-1.63-.224zm7.877 10.305V8.9h8.43v2.356h-5.62V13.7h5v2.302h-5v3.003h6.034v2.356h-8.844zm16.052-10.215l-.55.018-.46.036v3.38h.793c1.056 0 1.813-.13 2.27-.395s.685-.713.685-1.35c0-.612-.23-1.046-.694-1.304s-1.144-.386-2.044-.386zm-.162-2.392c1.873 0 3.308.332 4.304.998s1.495 1.7 1.495 3.102c0 .875-.2 1.586-.603 2.13s-.98.974-1.738 1.286l.792 1.07.82 1.26.784 1.366.702 1.394h-3.14l-.696-1.24-.723-1.223-.732-1.124-.724-.963h-1.387v4.55h-2.8V9.078c.612-.12 1.245-.204 1.9-.25l1.756-.072zM0 14.046V0l7.08 3.78v6.328l9.37.005 7.194 3.933H0zM18.366 8.95V0l7.27 3.686v9.494l-7.27-4.23zm0 17.167v-6.274l-9.443-.007c.01.042-7.313-3.996-7.313-3.996l24.026.113V30l-7.27-3.882zM0 26.118V16.94l7.08 4.13v8.735L0 26.118z" />
              </svg>
              {/* <img src="/assets/Logo.svg" alt="logo" className="h-9 " /> */}
            </a>
            <p className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer leading-tight mt-5">
              We are a web hosting company with a mission to help everyone who
              goes online succeed. We accomplish this by continuously developing
              server technology, giving expert assistance, and ensuring a
              flawless online website hosting experience.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <img src="/assets/Visa.webp" alt="Visa" className="w-1/5" />
              <img src="/assets/Master.webp" alt="Master" className="w-1/5" />
              <img
                src="/assets/Discover.webp"
                alt="Discover"
                className="w-1/5"
              />
              <img src="/assets/Club.webp" alt="Club" className="w-1/5" />
              <img src="/assets/RuPay.webp" alt="RuPay" className="w-1/5" />
            </div>
            <p className="text-textColor dark:text-white text-sm leading-tight mt-5 cursor-pointer">
              Add More
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-duration="400"
              className="lg:w-1/4 md:w-1/2 w-full"
            >
              <h4 className="text-left text-lg font-extrabold mb-3 tracking-tight">
                HOSTING
              </h4>
              <ul className="list-none mb-10 text-base space-y-2 mt-2">
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Web Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    VPS Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Minecraft Server Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    CyberPanel Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Cloud Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    WordPress Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Email Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    CMS Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Ecommerce Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Free Web Hosting
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Online Store
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Website Builder
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Buy Hosting
                  </a>
                </li>
              </ul>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-duration="400"
              className="lg:w-1/4 md:w-1/2 w-full"
            >
              <h4 className="text-left text-lg font-extrabold mb-3 tracking-tight">
                DOMAIN
              </h4>
              <ul className="list-none mb-10 text-base space-y-2 mt-2">
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Domain Name Search
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Domain Transfer
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    XYZ Domain
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Cheap Domains
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Domain Extensions
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    WHOIS Lookup
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Free SSL Certificate
                  </a>
                </li>
              </ul>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-duration="400"
              className="lg:w-1/4 md:w-1/2 w-full"
            >
              <h4 className="text-left text-lg font-extrabold mb-3 tracking-tight">
                HOSTING
              </h4>
              <ul className="list-none mb-10 text-base space-y-2 mt-2">
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    INFORMATION
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Migrate to Hostinger
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    System Status
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Payment Methods
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Rewards
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Reviews
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Sitemap
                  </a>
                </li>
                <h4 className="text-left pt-6 text-lg font-extrabold mb-3 tracking-tight">
                  LEGAL
                </h4>
                <ul className="list-none mb-10 text-base space-y-2 mt-2">
                  <li>
                    <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-duration="400"
              className="lg:w-1/4 md:w-1/2 w-full relative"
            >
              <h4 className="text-left text-lg font-extrabold mb-3 tracking-tight">
                COMPANY
              </h4>
              <ul className="list-none mb-10  text-base space-y-2 mt-2">
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    About Hostinger
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Our Technology
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Customer Care
                  </a>
                </li>
                <li>
                  <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                    Blog
                  </a>
                </li>
                <h4 className="text-left pt-6 text-lg font-extrabold mb-3 tracking-tight">
                  HELP
                </h4>
                <ul className="list-none mb-10 text-base space-y-2 mt-2">
                  <li>
                    <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                      Knowledge Base
                    </a>
                  </li>
                  <li>
                    <a className="text-indigo-900 dark:text-white hover:text-gray-500 cursor-pointer">
                      Report Online Abuse
                    </a>
                  </li>
                </ul>
                {/* Icons  */}
                <div className="flex justify-between pt-8 md:justify-center items-center gap-3 bottom-20 text-3xl md:absolute text-textColor dark:text-white">
                  <RiLinkedinBoxFill /> <RiFacebookBoxFill />
                  <RiInstagramFill />
                  <RiTwitterFill /> <RiYoutubeFill />
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div
          // data-aos="zoom-in"
          // data-aos-offset="100"
          // data-aos-duration="400"
          className="bg-[#f5f5ff] dark:bg-lightGray text-base text-gray-400 dark:text-white"
        >
          <div className="container border-t  border-gray-200 mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row text">
            <p className="md:text-center sm:text-left">
              © 2004-2022 hostinger.in - India&#39;s #1 Web Hosting & Domains
              provider.
            </p>
            <p className="inline-flex sm:ml-auto sm:mt-0 mt-5 justify-start">
              Prices are listed without VAT
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
