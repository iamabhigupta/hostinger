import React from "react";

export default function FindDomain() {
  return (
    <>
      <section className="bg-[#f5f5ff] dark:bg-lightGray py-20">
        <div className="flex flex-col  space-y-5 justify-center items-center">
          <h2 className="text-[1.7rem]" data-aos="fade-up">
            Find the perfect domain name
          </h2>
          <p
            data-aos="fade-up"
            className="text-center md:w-1/2 mx-auto text-textColor dark:text-white px-5 text-lg"
          >
            Enter domain name of your choice and pick any extension name on the
            next step (choose between .in, .com, .online, .live, .store, .info
            and many more)
          </p>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-4 md:gap-0 md:w-1/2 md:relative justify-center items-center"
          >
            <input
              type="text"
              id="domain"
              name="domain"
              placeholder="Type in that perfect domain name"
              className="w-full relative bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300 text-lg outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out py-2.5 px-7"
            />
            <button className="w-full md:w-fit right-0 md:absolute bg-gray-500 mx-auto border border-gray-300 text-white font-bold text-lg rounded-full py-3 px-12 ">
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
