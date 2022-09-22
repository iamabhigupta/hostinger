import { FaRegDotCircle } from "react-icons/fa";
import Timeline2 from "./Timeline2";

function Timeline() {
  return (
    <>
      <div className="hidden md:block">
        <Timeline2 />
      </div>
      <div className="block md:hidden">
        {/* Module 1 */}
        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-center w-full text-white my-16 px-5">
          <div
            data-aos="zoom-in-up"
            className="col-start-1 col-end-5 mt-10 rounded-xl my-4 ml-auto shadow-sm w-full dark:bg-lightGray lg:w-8/12 p-8 md:p-12"
          >
            <div className="flex justify-center items-center">
              <div className=" space-y-5">
                <p className="text-gray-400 dark:text-gray-300 tracking-widest font-extrabold">
                  EASY TO USE AND SIMPLE
                </p>
                <h2 className="font-extrabold text-left p-0 capitalize">
                  Easy to set up
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Getting your website live is as simple as a click of a button.
                  Everything you need - provided in a clear way.
                </p>
                <p className="underline font-semibold cursor-pointer">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="col-start-1 col-end-5 mt-10 rounded-xl my-4 ml-auto shadow-sm w-full dark:bg-lightGray lg:w-8/12 p-8 md:p-12"
          >
            <div className="flex justify-center items-center">
              <div className=" space-y-5">
                <p className="text-gray-400 dark:text-gray-300 tracking-widest font-extrabold">
                  PERFORMANCE AND SPEED
                </p>
                <h2 className="font-extrabold text-left p-0 capitalize">
                  Lightning-fast websites
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Website speed can slow or grow your business. Delight your
                  visitors with a fast-loading and optimized website.
                </p>
                <p className="underline font-semibold cursor-pointer">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="col-start-1 col-end-5 mt-10 rounded-xl my-4 ml-auto shadow-sm w-full dark:bg-lightGray lg:w-8/12 p-8 md:p-12"
          >
            <div className="flex justify-center items-center">
              <div className=" space-y-5">
                <p className="text-gray-400 dark:text-gray-300 tracking-widest font-extrabold">
                  GREAT WORDPRESS EXPERIENCE
                </p>
                <h2 className="font-extrabold text-left p-0 capitalize">
                  WordPress made easy
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Start your website with an automatic 1-click WordPress
                  installation. The backend is powered by LiteSpeed caching and
                  advanced optimization to ensure your websites are fast,
                  reliable and secure.
                </p>
                <p className="underline font-semibold cursor-pointer">
                  Learn More
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="col-start-1 col-end-5 mt-10 rounded-xl my-4 ml-auto shadow-sm w-full dark:bg-lightGray lg:w-8/12 p-8 md:p-12"
          >
            <div className="flex justify-center items-center">
              <div className=" space-y-5">
                <p className="text-gray-400 dark:text-gray-300 tracking-widest font-extrabold">
                  PROFESSIONAL AND HANDS-ON
                </p>
                <h2 className="font-extrabold text-left p-0 capitalize">
                  24/7 Support
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our team of experts will solve technical issues to get your
                  websites up and running. Anytime.
                </p>
                <p className="underline font-semibold cursor-pointer">
                  Contact us
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="col-start-1 col-end-5 mt-10 rounded-xl my-4 ml-auto shadow-sm w-full dark:bg-lightGray lg:w-8/12 p-8 md:p-12"
          >
            <div className="flex justify-center items-center">
              <div className=" space-y-5">
                <p className="text-gray-400 dark:text-gray-300 tracking-widest font-extrabold">
                  FLEXIBLE AND SCALABLE
                </p>
                <h2 className="font-extrabold text-left p-0 capitalize">
                  From micro to large-scale
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Different projects require different technologies. Pick a plan
                  that matches your current needs, then upgrade and scale as
                  your website grows.
                </p>
                <p className="underline font-semibold cursor-pointer">
                  See all products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Timeline;
