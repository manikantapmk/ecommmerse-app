import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// Arrow Components (Refactored outside the main component)
const Arrow = ({ direction, onClick, style }) => (
  <div
    className={`bg-white opacity-50 absolute text-3xl top-1/2 w-10 h-1/2 shadow-md transform -translate-y-1/2 p-4 focus:outline-none active:ring-4 active:ring-offset-blue-600 rounded-sm cursor-pointer z-10 ${
      direction === "next" ? "right-0" : "left-0"
    }`}
    onClick={onClick}
    style={style}
    aria-label={direction === "next" ? "Next Slide" : "Previous Slide"}
  >
    <div className="flex items-center justify-center h-full">
      {direction === "next" ? (
        <SlArrowRight className="" />
      ) : (
        <SlArrowLeft className="text-black" />
      )}
    </div>
  </div>
);

const HorizontalSlide = ({ title, Passdata, link, category1, category2 }) => {
  const [ProductsData, setProductsData] = useState(Passdata);

  // Update state when Passdata changes
  useEffect(() => {
    setProductsData(Passdata);
  }, [Passdata]);

  // console.log(data);
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    initialSlide: 2,
    draggable: false,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
  };

  return (
    <div className="container">
      <div className="bg-white p-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          {link && (
            <a href={link} className="text-link">
              see all Offers
            </a>
          )}
        </div>
        {/* Slick Slider */}
        <Slider {...settings}>
          {ProductsData.filter(
            (eachProd) =>
              eachProd.category === category1 || eachProd.category === category2
          ).map((eachProd) => (
            <div key={eachProd.id}>
              <div className="w-28 h-[200px] max-h-44 flex items-center justify-center gap-2">
                <a href="#">
                  <img
                    src={eachProd.imageUrl}
                    alt={eachProd.name || "Product"}
                  />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HorizontalSlide;
