/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 data-aos="fade-up" className="capitalize">
          What our client says about us
        </h2>
        <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 px-5 md:px-10 py-20 gap-14 lg:gap-7">
          {/* section  */}
          <div data-aos="zoom-in" data-aos-offset="100" data-aos-duration="800">
            <FaQuoteLeft className="fa-solid fa-quote-left text-primary text-6xl absolute z-10	-mt-8 ml-10" />
            <div className="group w-full bg-white dark:bg-lightGray rounded-md relative flex flex-col   cursor-pointer shadow md:p-11 p-6 ">
              <div className="text-gray-600 dark:text-white flex flex-col ">
                <div className="my-6 text-textColor dark:text-white font-medium ">
                  <p className="leading-relaxed text-lg text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Qui illo nesciunt obcaecati minus sapiente sequi rerum.
                    Enim, molestias.
                  </p>
                </div>

                <hr className=" bg-gray-300 border-gray-300 rounded-full" />

                <div className="flex justify-center my-5 ">
                  <img
                    src="https://i.postimg.cc/VNVH5wZf/photo-1564564321837-a57b7070ac4f-ixlib-rb-1-2.jpg"
                    alt="Testimonial Img"
                    className="mr-5 w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h3 className="dark:text-white font-semibold text-base uppercase">
                      Abhishek Gupta
                    </h3>
                    <p className="text-gray-500 font-normal text-sm uppercase">
                      Web Devloper
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-offset="100" data-aos-duration="800">
            <FaQuoteLeft className="fa-solid fa-quote-left text-primary text-6xl absolute z-10	-mt-8 ml-10" />
            <div className="group w-full bg-white dark:bg-lightGray rounded-md relative flex flex-col   cursor-pointer shadow md:p-11 p-6 ">
              <div className="text-gray-600 dark:text-white flex flex-col ">
                <div className="my-6 text-textColor dark:text-white font-medium ">
                  <p className="leading-relaxed text-lg text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Qui illo nesciunt obcaecati minus sapiente sequi rerum.
                    Enim, molestias.
                  </p>
                </div>

                <hr className=" bg-gray-300 border-gray-300 rounded-full" />

                <div className="flex justify-center my-5 ">
                  <img
                    src="https://i.postimg.cc/VNVH5wZf/photo-1564564321837-a57b7070ac4f-ixlib-rb-1-2.jpg"
                    alt="Testimonial Img"
                    className="mr-5 w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h3 className="dark:text-white font-semibold text-base uppercase">
                      Ms Dhoni
                    </h3>
                    <p className="text-gray-500 font-normal text-sm uppercase">
                      Digital Marketer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-offset="100" data-aos-duration="800">
            <FaQuoteLeft className="fa-solid fa-quote-left text-primary text-6xl absolute z-10	-mt-8 ml-10" />
            <div className="group w-full bg-white dark:bg-lightGray rounded-md relative flex flex-col  cursor-pointer shadow md:p-11 p-6 ">
              <div className="text-gray-600 dark:text-white flex flex-col ">
                <div className="my-6 text-textColor dark:text-white font-medium ">
                  <p className="leading-relaxed text-lg text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Qui illo nesciunt obcaecati minus sapiente sequi rerum.
                    Enim, molestias.
                  </p>
                </div>

                <hr className=" bg-gray-300 border-gray-300 rounded-full" />

                <div className="flex justify-center my-5 ">
                  <img
                    src="https://i.postimg.cc/VNVH5wZf/photo-1564564321837-a57b7070ac4f-ixlib-rb-1-2.jpg"
                    alt="Testimonial Img"
                    className="mr-5 w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h3 className="dark:text-white font-semibold text-base uppercase">
                      Rohit Sharma
                    </h3>
                    <p className="text-gray-500 font-normal text-sm uppercase">
                      Graphic Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* section  */}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
