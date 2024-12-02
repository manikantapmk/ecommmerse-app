import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { baseUrl } from "./config";

const Banner = () => {
    const url = "https://react-slick.neostack.com/img/react-slick/abstract04.jpg"
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };

  return (
    <section>
      <div className="slider-container container px-8">
      <Slider {...settings}>
        <div className="h-lvh">
          <img src={url} />
        </div>
        <div>
        <img src={url} />
        </div>
        <div>
        <img src={url} />
        </div>
        <div>
        <img src={url} />
        </div>
      </Slider>
    </div>
    </section>
  );
};

export default Banner;
