import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import navbar_deal from "../assets/navbar_deal.png"

const SecondNav = () => {
  return (
    <section className="bg-primary-light">
       <div className="text-white flex items-center justify-between px-4 pr-0">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            {/* Menu */}
            <button className="flex items-center space-x-1">
              <span className="text-2xl"><GiHamburgerMenu /></span>
              <span>All</span>
            </button>
            {/* Links */}
            <nav className="flex space-x-4 text-sm">
              <a href="#" className="hover:underline">
                Buy Again
              </a>
              <a href="#" className="hover:underline">
                Keep Shopping for
              </a>
              <a href="#" className="hover:underline">
                MX Player
              </a>
              <a href="#" className="hover:underline">
                Sell
              </a>
              <a href="#" className="hover:underline">
                Gift Cards
              </a>
              <a href="#" className="hover:underline">
                AmazonBasics
              </a>
              <a href="#" className="hover:underline">
                Gift Ideas
              </a>
              <a href="#" className="hover:underline">
                Amazon Pay
              </a>
              <a href="#" className="hover:underline">
                Customer Service
              </a>
              <a href="#" className="hover:underline">
                Browsing History
              </a>
            </nav>
          </div>

          {/* Right Section - Black Friday Banner */}
          <div className="text-black font-bold text-sm px-3 pr-0 rounded h-[40px]">
            <img src={navbar_deal} alt="" className="h-full"/>
          </div>
        </div>
    </section>
  );
};

export default SecondNav;
