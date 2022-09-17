import React from "react";

export default function FindDomain() {
  return (
    <>
      <section className="bg-[#f5f5ff] py-20">
        <div className="flex flex-col  space-y-5 justify-center items-center">
          <h2 className="font-extrabold">Find the perfect domain name</h2>
          <p className="text-center w-1/2 mx-auto text-textColor">
            Enter domain name of your choice and pick any extension name on the
            next step (choose between .in, .com, .online, .live, .store, .info
            and many more)
          </p>
          <div className="flex w-1/2 relative justify-center items-center">
            <input
              type="text"
              id="domain"
              name="domain"
              placeholder="Type in that perfect domain name"
              className="w-full relative bg-white rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300 text-lg outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out py-2.5 px-7"
            />
            {/* <input
              type="text"
              id="first_name"
              placeholder="Type in that perfect domain name"
              className="w-full relative mx-auto border border-gray-300 text-gray-900 text-lg rounded-full focus:border-primary block py-3 px-7 "
              autoComplete="off"
            /> */}
            <button className="w-fit right-0 absolute bg-gray-500 mx-auto border border-gray-300 text-white font-bold text-lg rounded-full py-3 px-12 ">
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
