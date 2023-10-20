import { setBackgroundImage } from "@/app/utils/helpers";
import React from "react";

const HomeHero = () => {
  return (
    <section
      className="py-10"
      style={setBackgroundImage("/image/bg-hero.webp")}
    >
      <div className="container">
        <div className="flex gap-8 flex-wrap ">
          {/* Hero Left  Banner */}
          <div
            className="w-2/3 md:py-16 md:px-14 py-10 px-6 rounded-lg flex-1"
            style={setBackgroundImage("/image/hero-1.webp")}
          >
            <div className="flex flex-col justify-between h-full ">
              <div>
                <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-color">
                  Active Summer With <br /> Juice Milk 300ml
                </h2>
                <h2 className="text-1xl font-semibold text-color">
                  New arrivals with nature fruits, juice <br /> milks,essential
                  for summer{" "}
                </h2>
                <a href="#" className="btn-white md:mt-14 mt-10">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          {/* Hero Right Banner */}
          <div
            className="md:w-1/3 w-full md:py-16 md:px-14 py-10 px-6 rounded-lg "
            style={setBackgroundImage("/image/hero-3.webp", {
              backgroundPosition: "bottom right",
              backgroundColor: "#fac251",
              backgroundSize: "unset",
            })}
          >
            <div className="flex flex-col justify-between h-full ">
              <div>
                <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-title">
                  20% SALE OFF
                </h2>
                <h2 className="text-2xl font-semibold text-title">
                  Synthetic seeds <br />
                  Net 2.0 OZ
                </h2>
                <a href="#" className="btn-white md:mt-14 mt-10">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
