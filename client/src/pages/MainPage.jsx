import React from "react";
import Banner from "../components/Banner/Banner";
import HorizontalSlide from "../components/HorizontalSlide";
import gridData from "../data";

const MainPage = () => {
  const slideInfo = {
    Passdata: gridData,
    title: "Best Sellers in Home & Kitchen",
    category1: "home",
    category2: "accessories",
  };

  return (
    <>
      <Banner />
      <div className="flex gap-y-6 flex-col">
        <HorizontalSlide {...slideInfo} />
        <HorizontalSlide
          Passdata={gridData}
          title="Up to 60% off | Car & bike accessories & more"
          link="see all offers"
          category1="car accessories"
          category2="bike accessories"
        />
      </div>
    </>
  );
};

export default MainPage;
