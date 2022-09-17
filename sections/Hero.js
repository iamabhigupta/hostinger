/* eslint-disable @next/next/no-img-element */
import Button from "../components/Button";
import { FaCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-primary py-10">
      <div className="text-white ">
        <div className="flex px-32 pb-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-5xl text-3xl mb-4 font-extrabold">
              Everything You Need to Create a Website
            </h1>
            <p className="mb-8 leading-relaxed font-bold">
              Join 1,278,620 website owners who are building their businesses
              online.
            </p>
            <div className="flex justify-center">
              <button className="flex justify-center items-center text-white bg-[#fc5185] border-0 py-3 px-20 focus:outline-none hover:bg-[#ff3f79] rounded-full text-lg font-extrabold">
                Get started
              </button>
            </div>
            <div className="flex justify-center items-center gap-1 mt-10">
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <span className="text-sm">30-day money-back guarantee</span>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/assets/hero-img.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <section className="mt-16">
  <h1 className="text-7xl font-bold">
    Hi I am <span className="dark:text-red-600">Abhishek</span>
  </h1>

  <h3 className="text-4xl my-3">I am Web Designer</h3>
  <p className="text-gray-700 mb-8">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quibusdam
    autem doloremque beatae iure, nihil fugit doloribus cum soluta modi!
  </p>
  <Button className="bg-purple-600 text-white px-6">Hire Me!</Button>
</section>; */
}
