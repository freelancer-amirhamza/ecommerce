import React from "react";
import { setBackgroundImage } from "@/app/utils/helpers";

const HomePosters = () => {
  return (
    <section className="py-6">
      <div className="container">
        <div className="flex  flex-wrap justify-between ">
          {/* Hero Right Banner */}
          <div
            className="md:w-[32%] mb-5 w-full md:py-14 md:px-12 py-10 px-6 rounded-lg "
            style={setBackgroundImage(
              "https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-banner-2.png",
              {
                backgroundPosition: "center",
                backgroundColor: "#fac251",
                backgroundSize: "cover",
              }
            )}
          >
            <div className="flex flex-col justify-between h-full ">
              <div>
                <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-title">
                  Mango Juice <br />Battles
                </h2>
                <h2 className="text-2xl font-semibold text-title">
                  Synthetic seeds <br />
                  Net 2.0 OZ
                </h2>
                <span
                  href="#"
                  className="text-color text-lg font-semibold md:mt-8 mt-6"
                >
                  20% off for new customer
                </span>
              </div>
            </div>
          </div>
          <div
            className="md:w-[32%] mb-5 w-full md:py-16 md:px-14 py-10 px-6 rounded-lg "
            style={setBackgroundImage(
              "https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-banner-3.png",
              {
                backgroundPosition: "bottom right",
                backgroundColor: "#fac251",
                backgroundSize: "cover",
              }
            )}
          >
            <div className="flex flex-col justify-between h-full ">
              <div>
              <div className="flex flex-1 gap-3">
              <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-orange">
                  $9,9 
                </h2>
                <h4 className="text-2xl mt-2 line-through font-bold text-title">
                  $15.6
                </h4>
              </div>
                <h2 className="text-2xl font-semibold text-title">
                  MEAT PORK CANNED
                </h2>
                <span
                  href="#"
                  className="text-color text-lg font-semibold md:mt-8 mt-6"
                >
                  250g
                </span>
              </div>
            </div>
          </div>{" "}
          <div
            className="md:w-[32%] w-full mb-5 md:py-16 md:px-14 py-10 px-6 rounded-lg "
            style={setBackgroundImage(
              "https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-banner-4.png",
              {
                backgroundPosition: "center",
                backgroundColor: "#fac251",
                backgroundSize: "cover",
              }
            )}
          >
            <div className="flex flex-col justify-between h-full ">
              <div>
                <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-white">
                  Olive oil
                </h2>
                <h2 className="text-2xl font-semibold text-title">
                  Best Product to make your favor
                </h2>
                <p>ONLY</p>
                <span
                  href="#"
                  className="text-color text-lg font-semibold md:mt-8 mt-6"
                >
                 $12.5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePosters;
