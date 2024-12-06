import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ProductsData from "../data";

// Arrow Components (Refactored outside the main component)
const Arrow = ({ direction, onClick, style }) => (
  <div
    className={`absolute top-[26%] w-20 h-1/2 transform -translate-y-1/2 p-4 focus:outline-none active:ring-4 active:ring-offset-blue-600 rounded-sm cursor-pointer z-10 ${
      direction === "next" ? "right-0" : "left-0"
    }`}
    onClick={onClick}
    style={style}
    aria-label={direction === "next" ? "Next Slide" : "Previous Slide"}
  >
    <div className="flex items-center justify-center h-full">
      {direction === "next" ? (
        <SlArrowRight className="text-black text-3xl" />
      ) : (
        <SlArrowLeft className="text-black text-3xl" />
      )}
    </div>
  </div>
);

const HorizontalSlide = () => {
  const [data, setData] = useState(ProductsData);

  console.log(data);
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    draggable: false,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
  };

  return (
    <div className="container">
      <div className="bg-white p-4">
        <h1 className="text-2xl font-bold">Best Sellers in Home & Kitchen</h1>
        {/* Slick Slider */}
        <Slider {...settings}>
          {ProductsData.filter(
            (eachProd) =>
              eachProd.category === "home" ||
              eachProd.category === "accessories"
          ).map((eachProd) => {
            return (
              <div key={eachProd.id}>
                <img src={eachProd.imageUrl} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HorizontalSlide;
