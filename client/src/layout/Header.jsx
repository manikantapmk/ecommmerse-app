import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { LiaCartPlusSolid } from "react-icons/lia";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English - EN");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.searchQuery.value;
    console.log("Search query:", searchQuery);
  };

  const categories = [
    "All Categories", "Alexa Skills", "Amazon Devices", "Amazon Fashion", "Amazon Pharmacy", 
    "Appliances", "Apps & Games", "Audible Audiobooks", "Baby", "Beauty", "Books", 
    "Car & Motorbike", "Clothing & Accessories", "Collectibles", "Computers & Accessories", 
    "Deals", "Electronics", "Furniture", "Garden & Outdoors", "Gift Cards", "Grocery & Gourmet Foods", 
    "Health & Personal Care", "Home & Kitchen", "Industrial & Scientific", "Jewellery", "Kindle Store", 
    "Luggage & Bags", "Luxury Beauty", "Movies & TV Shows", "MP3 Music", "Music", "Musical Instruments", 
    "Office Products", "Pet Supplies", "Prime Video", "Shoes & Handbags", "Software", 
    "Sports, Fitness & Outdoors", "Subscribe & Save", "Tools & Home Improvement", "Toys & Games", 
    "Under ₹500", "Video Games", "Watches"
  ];

  const languages = [
    { label: "English - EN", code: "EN" },
    { label: "हिंदी - HI", code: "HI" },
    { label: "தமிழ் - TA", code: "TA" },
    { label: "తెలుగు - TE", code: "TE" },
    { label: "ಕನ್ನಡ - KN", code: "KN" },
    { label: "മലയാളം - ML", code: "ML" },
    { label: "বাংলা - BN", code: "BN" },
    { label: "मराठी - MR", code: "MR" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <section className="bg-primary-dark text-white">
      <header className="px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-primary-dark shadow-md gap-4">
        {/* Left Section: Logo & Location */}
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Amazon Logo" className="h-10" />
            .in
          </a>
          <div>
            <p className="text-xs">Deliver to Manikanta</p>
            <p className="text-sm font-bold">Piduguralla 522437</p>
          </div>
        </div>

        {/* Search Bar */}
        <form
          className="flex items-center flex-grow max-w-4xl h-[40px] rounded-md overflow-hidden"
          onSubmit={handleSearch}
        >
          <select className="bg-slate-50 text-slate-500 hover:text-black text-sm p-1 w-12 border-r h-full cursor-pointer focus:outline-none">
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="flex-grow p-2 text-black border border-gray-300 h-full focus:outline-none"
            name="searchQuery"
          />
          <button
            type="submit"
            className="bg-secondary hover:bg-hover p-2 h-full"
          >
            <span className="text-primary-dark text-2xl">
              <IoSearchOutline />
            </span>
          </button>
        </form>

        {/* Right Section: Links */}
        <div className="flex items-center space-x-4">
          {/* Language Dropdown */}
          <Dropdown 
            selectedLanguage={selectedLanguage} 
            languages={languages} 
            isOpen={isOpen} 
            toggleDropdown={toggleDropdown} 
            selectLanguage={selectLanguage} 
          />

          <div>
            <p className="text-xs">Hello, Manikanta</p>
            <p className="text-sm font-bold">Account & Lists</p>
          </div>
          <div>
            <p className="text-xs">Returns</p>
            <p className="text-sm font-bold">& Orders</p>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-4xl relative">
              <LiaCartPlusSolid />
              <span className="absolute top-0 left-3 bg-primary-dark text-secondary_dark text-xs font-bold p-1 pb-0 rounded-full">
                0
              </span>
            </span>
            <span className="text-sm font-bold">Cart</span>
          </div>
        </div>
      </header>
    </section>
  );
};

// Dropdown Component
const Dropdown = ({ selectedLanguage, languages, isOpen, toggleDropdown, selectLanguage }) => {
  return (
    <div className="relative">
      <button
        className="w-full text-center px-2 py-2 border-gray-300 rounded-md focus:outline-none"
        onClick={toggleDropdown}
      >
        {selectedLanguage}
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-36 border border-gray-300 rounded-md shadow-lg bg-white">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="px-4 py-2 text-black hover:bg-slate-100 cursor-pointer"
              onClick={() => selectLanguage(lang.label)}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
