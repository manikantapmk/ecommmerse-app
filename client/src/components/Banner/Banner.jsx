import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import HeadphonesSection from "./HeadphonesSection";
import exportData from "./gridData";

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

// Shuffle function to randomize an array
const shuffleArray = (array) => {
  const shuffledArray = [...array];  // Make a copy of the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];  // Swap elements
  }
  return shuffledArray;
};

// Arrow Components (Refactored outside the main component)
const Arrow = ({ direction, onClick, style }) => (
  <div
    className={`absolute top-[26%] w-20 h-1/2 transform -translate-y-1/2 p-4 focus:outline-none active:ring-4 active:ring-offset-blue-600 rounded-sm cursor-pointer z-10 ${direction === "next" ? "right-0" : "left-0"}`}
    onClick={onClick}
    style={style}
    aria-label={direction === "next" ? "Next Slide" : "Previous Slide"}
  >
    <div className="flex items-center justify-center h-full">
      {direction === "next" ? <SlArrowRight className="text-black text-3xl" /> : <SlArrowLeft className="text-black text-3xl" />}
    </div>
  </div>
);

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
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
  };

  // Shuffle exportData randomly
  const shuffledData = shuffleArray(exportData);

  return (
    <section>
      <div className="slider-container container relative max-h-[1150px]">
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

        {/* Grid Section */}
        <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-full">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center bg-transparent">
            {/* Map over shuffled data */}
            {shuffledData.map(({ title, items, link }) => (
              <HeadphonesSection key={link} title={title} items={items} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
