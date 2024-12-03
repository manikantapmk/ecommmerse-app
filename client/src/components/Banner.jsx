import React from "react";
import "slick-carousel/slick/slick.css";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Slide data
const SlideData = [
  {
    id: 1,
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/August/Unrec/BAU/21Aug/2-1._CB565867124_.jpg",
    alt_text: "A beautiful scenery",
  },
  {
    id: 2,
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL_Events/img24/HSS/Dec24/3000x1200_PC2._CB540801550_.jpg",
    alt_text: "A mountain landscape",
  },
  {
    id: 3,
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
    alt_text: "A calm beach at sunset",
  },
  {
    id: 4,
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/August/Unrec/BAU/21Aug/1-1._CB565867124_.jpg",
    alt_text: "A vibrant city skyline",
  },
  {
    id: 5,
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/Nov_New_3000x1200._CB542180708_.jpg",
    alt_text: "A forest trail with autumn leaves",
  },
];

// Next Arrow component
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute transform right-0 top-[calc(22%+5px)] w-20 h-64 -translate-y-1/2 p-4 focus:outline-none active:ring-4 active:ring-offset-blue-600 rounded-sm cursor-pointer z-10`}
      onClick={onClick}
      style={{ ...style, zIndex: 10 }}
      aria-label="Next Slide"
    >
      <div className="flex items-center justify-center h-full">
        <span className="text-black text-3xl">
          <SlArrowRight />
        </span>
      </div>
    </div>
  );
}

// Prev Arrow component
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`absolute transform top-[calc(22%+5px)] w-20 h-64 -translate-y-1/2 p-4 focus:outline-none active:ring-4 active:ring-offset-blue-600 rounded-sm cursor-pointer z-10`}
      onClick={onClick}
      style={{ ...style, zIndex: 10 }}
      aria-label="Previous Slide"
    >
      <div className="flex items-center justify-center h-full">
        <span className="text-black text-3xl">
          <SlArrowLeft />
        </span>
      </div>
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    draggable: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section>
      <div className="slider-container container relative">
        {/* Slick Slider */}
        <Slider {...settings}>
          {SlideData.map((slide) => (
            <div key={slide.id}>
              <img
                src={slide.url}
                alt={slide.alt_text}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </Slider>

        <div className="absolute top-1/2 bg-primary-light w-full h-1/2">
          {/* Centered Text */}
          <h1 className="absolute text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold">
            Hello
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
