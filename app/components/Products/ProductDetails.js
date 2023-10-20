import React from "react";
import FooterCard from "../FooterCard";
import Quantity from "../shared/Quantity";
import Breadcrumb from "../shared/Breadcrumb";

const ProductDetails = ({ price = 25.25, oldPrice = 30 }) => {
  return (
    <div className="py-10 bg-[#F5F5F5]">
      <div className="container ">
        <div className="p-7 bg-white rounded-2xl">
          <div className="flex flex-wrap lg:flex-row flex-col lg:gap-0 gap-7">
            <div className="lg:w-2/5 w-full lg:border-r">
              <img
                src="https://drfurithemes.com/farmart2/wp-content/uploads/sites/19/2020/02/02_1a.jpg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="lg:w-2/5 w-full lg:px-10 pl-0 ">
              <div className="text-color mb-5">
              <Breadcrumb
             items={[
              {label: 'Home', href: '/' },
              {label: 'Shop', href: '/products' },
              {label: 'Bar S - Classic Bun Length Franks'}
                    ]}
              />
              </div>
              <h4 className="md:text-xl text-base font-bold mb-2 text-orange">
                MartFury
              </h4>
              <h1 className="text-title  md:text-3xl text-xl font-semibold mb-5">
                Bar S - Classic Bun Length Franks
              </h1>
              <span className="text-color text-xs">
                ⭐⭐⭐⭐⭐ (1 customer reviews){" "}
              </span>
              <div className="my-3">
                <span className="text-sm text-color mb-2 block ">500ml</span>
                <div className="flex items-center gap-1">
                  <span
                    className={`text-xl font-bold ${
                      oldPrice ? "text-orange" : "text-green"
                    }`}
                  >
                    {price}{" "}
                  </span>
                  {oldPrice && (
                    <span className="text-lg line-through text-gray-400">
                      {oldPrice}
                    </span>
                  )}
                </div>
              </div>
              <div className="my-5 bg-[#EBFAE9] w-fit px-3 py-2 border border-[#82d45e] rounded-md ">
                Availability:{" "}
                <span className="text-green ml-1 font-bold">In Stock</span>
              </div>
              <div className="border-t"></div>
              <div className="my-5">
                <span className="text-sm pb-2 block text-color">Quantity</span>
                <div className="flex  gap-3">
                 <Quantity/>
                  <button className="btn-white bg-primary">Add to cart</button>
                </div>
              </div>
              <div className="border-t my-7 "></div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-900">
                  <span className="text-color">SKU</span> #veg65657
                </p>
                <p className="text-gray-900">
                  <span className="text-color">Brand:</span> Mango
                </p>
                <p className="text-gray-900">
                  <span className="text-color">Vender:</span> MartFury
                </p>
                <p className="text-gray-900">
                  <span className="text-color">Categories:</span> Bar S -
                  Classic Bun Length Franks
                </p>
                <p className="text-gray-900">
                  <span className="text-color">Tag:</span> Best Seller
                </p>
              </div>
            </div>
            <div className="lg:w-1/5 w-full">
              <div className=" bg-[#E3E3E3] px-5 py-7 rounded-md">
                <FooterCard
                  image="/icons/f1.svg"
                  title="Free Shopping"
                  subtitle="For All Orders over $200"
                />
                <div className="border-t my-5"></div>
                <FooterCard
                  image="/icons/f2.svg"
                  title="1 & 1 Returns"
                  subtitle="Cancellation after 1 day"
                />
                <div className="border-t my-5"></div>
                
                <FooterCard
                  image="/icons/f3.svg"
                  title="100% Secure Payment"
                  subtitle="Guarantee secure payments"
                />
              </div>
              <div className="bg-[#E3E3E3] px-5 mt-5 py-7 rounded-md">
                <p className="font-bold text-title">Hotline Order:</p>
                <span className="text-color">Mon-Friday; 7:00 am - 18:00 pm</span>
                <p className="md:text-2xl text-xl font-bold text-title mt-5">+880 1792978577</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
