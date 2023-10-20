import React from "react";
import FooterCard from "../components/FooterCard";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import Button from "../components/shared/Button";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container">
        {/* footer infos */}
        <div className="flex  flex-wrap space-y-4 pb-10 pt-8   border-b justify-between items-center">
          <FooterCard
            image="/icons/f1.svg"
            title="Free Shopping"
            subtitle="For All Orders over $200"
          />
          <FooterCard
            image="/icons/f2.svg"
            title="1 & 1 Returns"
            subtitle="Cancellation after 1 day"
          />
          <FooterCard
            image="/icons/f3.svg"
            title="100% Secure Payment"
            subtitle="Gurantee secure payments"
          />
          <FooterCard
            image="/icons/f4.svg"
            title="24/7 Dedicated Support"
            subtitle="Anywhere & anytime"
          />
          <FooterCard
            image="/icons/f5.svg"
            title="Daily Offers"
            subtitle="Discount up to 70% OFF"
          />
        </div>

        {/* footer widgets */}
        <div className="my-10 flex flex-wrap gap-10 justify-between">
          <div className="max-w-sm">
            <h2 className="text-xl mb-5 font-bold">
              Farmart – Your Online Foods & Grocery
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus viverra iaculis. Etiam vulputate et justo eget
              scelerisque.
            </p>
            <span className="flex">
              <FiPhoneCall className="text-color mt-[5px] " />
              <div className=" ml-4">
                <p className="">Hotline 24/7</p>
                <h3 className="text-2xl font-bold">
                  {" "}
                  <a href="tel:+8801792978577"> (+880) 17 9297-8577</a>
                </h3>
              </div>
            </span>
            <span className="flex mt-5">
              <AiOutlineHome className="text-color mt-[5px] " />
              <address className=" ml-4">
                <p className="">Moghbazar, Dhaka-1217 Bangladesh </p>
              </address>
            </span>
            <span className="flex mt-5">
              <HiOutlineMail className="text-color mt-[5px] " />
              <div className=" ml-4">
                <p className="">
                  <a href="mailto:dev.amirhamza@gmail.com">
                    {" "}
                    dev.amirhamza@gmail.com
                  </a>
                </p>
              </div>
            </span>
          </div>
          {/* Links  */}
          <div className="">
            <h2 className="text-lg mb-6 font-bold">Useful Links</h2>
            <div className="">
              <ul>
                <FooterLink href="/" text="About Us" />
                <FooterLink href="/" text="Contact" />
                <FooterLink href="/" text="Help Center" />
                <FooterLink href="/" text="Career" />
                <FooterLink href="/" text="Policy" />
                <FooterLink href="/" text="Flash Sale" />
                <FooterLink href="/" text="Official" />
                <FooterLink href="/" text="Sitemap" />
              </ul>
            </div>
          </div>
          {/* Links  */}
          <div className="">
            <h2 className="text-lg mb-6 font-bold">Help Center</h2>
            <div className="">
              <ul>
                <FooterLink href="/" text="Payments" />
                <FooterLink href="/" text="Shipping" />
                <FooterLink href="/" text="Shipping" />
                <FooterLink href="/" text="FAQr" />
                <FooterLink href="/" text="Checkout" />
                <FooterLink href="/" text="Other Issues" />
              </ul>
            </div>
          </div>
          {/* Links  */}
          {/* <div className="">
            <h2 className="text-lg mb-6 font-bold">Farmart Busines</h2>
            <div className="">
              <ul>
                <FooterLink href="/" text="Affiliate Program" />
                <FooterLink href="/" text="Affiliate Program" />
                <FooterLink href="/" text="Our Suppliers" />
                <FooterLink href="/" text="Accessibility" />
                <FooterLink href="/" text="Advertise With Us" />
              </ul>
            </div>
          </div> */}
          {/* News */}
          <div className="max-w-sm">
            <h2 className="text-lg mb-6 font-bold">Farmart Busines</h2>
            <p className="text-color">
              Register now to get updates on promotions and coupns. Don't worry!
              We not spam
            </p>
            <div className="flex items-center mt-5">
              <div className="flex flex-1 items-center border p-4 rounded">
              <HiOutlineMail className="text-title mt-[5px] "/>
              <input
               type="text"
               placeholder="Your email..."
               className="outline-none bg-transparent px-4 flex-1"
              />
              </div>
              <Button
              title="Subscribe"
              className="self-stretch"
              />
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="py-8 flex flex-wrap space-y-3 justify-center md:justify-between items-center border-t">
          <p className="text-sm">&copy; {new Date().getFullYear()} 
           <a className="" href="https://amirhamzadev.netlify.app"> Developed by <b>Amir Hamza</b>  </a>  No rights reserved, Build for practice. </p>
           <img src="./image/footer-new-payment.png" alt="" />
        </div>
      </div>
    </footer>
  );
};
const FooterLink = ({ href = "#", text }) => (
  <li className="mb-2 text-color hover:text-primary ">
    <Link href={href}>{text} </Link>
  </li>
);

export default Footer;
