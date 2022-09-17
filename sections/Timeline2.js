import { ImWordpress } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaCloudflare, FaLock } from "react-icons/fa";

export default function Timeline2() {
  return (
    <div className="py-16 md:py-24 relative">
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
        {/* 1 */}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 mt-10 rounded-xl my-4 ml-auto shadow-sm w-full lg:w-8/12 p-12">
            <div className="flex justify-center items-center">
              <div className=" space-y-5">
                <p className="text-gray-400 tracking-widest font-extrabold">
                  EASY TO USE AND SIMPLE
                </p>
                <h2 className="font-extrabold text-left">Easy to set up</h2>
                <p className="pr-20 text-gray-600">
                  Getting your website live is as simple as a click of a button.
                  Everything you need - provided in a clear way.
                </p>
                <p className="underline font-semibold">Learn More</p>
              </div>
            </div>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-1">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-textColor pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-textColor shadow" />
            <div className="w-8 h-8 absolute top-1 -ml-1 -mt-3 rounded-full bg-[#fc5185] shadow" />
          </div>
        </div>
        {/* 2 */}
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-textColor pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-textColor" />
          </div>
          <div className="absolute right-10 top-10 rounded-full grid place-content-center">
            <ImWordpress className="text-[15rem] opacity-5" />
          </div>
          <div className="absolute left-20 top-1/4 rounded-full grid place-content-center">
            <FaCloudflare className="text-[15rem] opacity-5" />
          </div>
          <div className="absolute left-0 bottom-1/4 rounded-full grid place-content-center">
            <MdEmail className="text-[15rem] opacity-5" />
          </div>
          <div className="absolute right-60 bottom-40 rounded-full grid place-content-center">
            <FaLock className="text-[15rem] opacity-5" />
          </div>
          <div className="col-start-6 col-end-10 mr-auto">
            <div className="flex flex-row-reverse md:contents">
              <div className="rounded-xl my-4 mr-auto shadow-sm w-full lg:w-8/12 p-12">
                <div className="flex justify-start items-center">
                  <div className=" space-y-5">
                    <p className="text-gray-400 tracking-widest font-extrabold">
                      PERFORMANCE AND SPEED
                    </p>
                    <h2 className="font-extrabold text-left">
                      Lightning-fast websites
                    </h2>
                    <p className="pr-20 text-gray-600">
                      Website speed can slow or grow your business. Delight your
                      visitors with a fast-loading and optimized website.
                    </p>
                    <p className="underline font-semibold">Learn More</p>
                  </div>
                </div>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative">
                <div className="h-full w-full ml-1 flex items-center justify-center"></div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 mt-10 rounded-xl my-4 ml-auto shadow-sm w-full lg:w-8/12 p-12 z-10">
            <div className="flex justify-center items-center">
              <div className=" space-y-5">
                <p className="text-gray-400 tracking-widest font-extrabold">
                  GREAT WORDPRESS EXPERIENCE
                </p>
                <h2 className="font-extrabold text-left">
                  WordPress made easy
                </h2>
                <p className="pr-20 text-gray-600">
                  Start your website with an automatic 1-click WordPress
                  installation. The backend is powered by LiteSpeed caching and
                  advanced optimization to ensure your websites are fast,
                  reliable and secure.
                </p>
                <p className="underline font-semibold">Learn More</p>
              </div>
            </div>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-textColor pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-textColor shadow" />
          </div>
        </div>
        {/* 4 */}
        <div className="flex md:contents">
          <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-textColor pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-textColor" />
          </div>
          <div className="col-start-6 col-end-10 mr-auto">
            <div className="flex flex-row-reverse md:contents">
              <div className="rounded-xl my-4 mr-auto shadow-sm w-full lg:w-8/12 p-12">
                <div className="flex justify-start items-center">
                  <div className=" space-y-5">
                    <p className="text-gray-400 tracking-widest font-extrabold">
                      PROFESSIONAL AND HANDS-ON
                    </p>
                    <h2 className="font-extrabold text-left">24/7 Support</h2>
                    <p className="pr-20 text-gray-600">
                      Our team of experts will solve technical issues to get
                      your websites up and running. Anytime.
                    </p>
                    <p className="underline font-semibold">Contact us</p>
                  </div>
                </div>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-textColor pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 5 */}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 mt-10 rounded-xl my-4 ml-auto shadow-sm w-full lg:w-8/12 p-12">
            <div className="flex justify-center items-center">
              <div className=" space-y-5">
                <p className="text-gray-400 tracking-widest font-extrabold">
                  FLEXIBLE AND SCALABLE
                </p>
                <h2 className="font-extrabold text-left">
                  From micro to large-scale
                </h2>
                <p className="pr-20 text-gray-600">
                  Different projects require different technologies. Pick a plan
                  that matches your current needs, then upgrade and scale as
                  your website grows.
                </p>
                <p className="underline font-semibold">See all products</p>
              </div>
            </div>
          </div>
          <div className="col-start-5 col-end-6 md:mx-auto relative mr-1">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-textColor pointer-events-none" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-textColor shadow" />
            <div className="w-8 h-8 absolute bottom-0 -mb-3 -ml-1 rounded-full bg-[#fc5185] shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}
