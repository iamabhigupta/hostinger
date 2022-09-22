/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function LastSection() {
  return (
    <>
      <section className="px-8 md:px-10 pb-14 md:pb-24 ">
        <h2 data-aos="fade-up" className="font-extrabold">
          User-Friendly Control Panel
        </h2>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-14 mt-16">
          <div data-aos="zoom-in" className="md:w-1/2">
            <video
              className="play-video-on-scroll d-none d-xl-block lazy-load-poster lazy-loaded-video"
              muted="muted"
              preload="metadata"
              width="100%"
              height="auto"
              data-poster="https://assets.hostinger.com/images/homepage2020/control-panel-section/hpanel-img-b7635fbb82.png"
              poster="https://assets.hostinger.com/images/homepage2020/control-panel-section/hpanel-img-b7635fbb82.png"
            >
              <source
                src="https://assets.hostinger.com/videos/homepage2020/user-friendly-cp-2020-7ab2c70b24.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="md:w-1/2 space-y-10 md:pl-16">
            <div data-aos="zoom-in" className="space-y-6">
              <img src="/assets/icons/Ease of Use.svg" alt="" />
              <h4 className="text-textColor dark:text-white font-extrabold text-2xl">
                Ease of Use
              </h4>
              <p>
                Hostinger Panel is extremely user-friendly and can be used by
                those with little experience in website development.
              </p>
            </div>
            <div data-aos="zoom-in" className="space-y-6">
              <img src="/assets/icons/Powerful.svg" alt="" />
              <h4 className="text-textColor dark:text-white font-extrabold text-2xl">
                Powerful
              </h4>
              <p>
                Hostinger Panel is extremely user-friendly and can be used by
                those with little experience in website development.
              </p>
            </div>
            <div data-aos="zoom-in" className="space-y-6">
              <img src="/assets/icons/WordPress Optimized.svg" alt="" />
              <h4 className="text-textColor dark:text-white font-extrabold text-2xl">
                WordPress Optimized
              </h4>
              <p>
                Hostinger Panel is extremely user-friendly and can be used by
                those with little experience in website development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 md:px-10 pb-14 md:pb-24 ">
        <div className="flex flex-col space-y-5 md:mt-16 justify-center items-center">
          <h2
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-duration="800"
            className="font-extrabold "
          >
            30-Day Money-Back Guarantee
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-duration="800"
            className="px-3"
          >
            We&#39;ll refund your payment if you&#39;re not 100% satisfied with
            Hostinger. No hassle, no risk.
          </p>
          <button
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-duration="800"
            className="flex justify-center items-center text-white bg-primary border-0 py-3 px-20 focus:outline-none hover:bg-[#5d2ee7] rounded-full text-lg font-extrabold mt-7 "
          >
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}
