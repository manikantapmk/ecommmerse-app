import React from "react";

const HeadphonesSection = ({ title, items, link }) => {
  return (
    <div className="max-w-96 p-4 bg-white relative h-auto flex flex-col justify-evenly">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {items.map((eachItem) => {
          return (
            <div className="flex flex-col bg-white">
              <img
                src={eachItem.image}
                alt={eachItem.brand}
                className=" object-contain mb-1"
              />
              <div className="flex gap-2 items-center justify-start pb-2">
                <p className="text-xs">
                  {eachItem.name}
                  {eachItem.starting_price && (
                    <span>{`Starting ${eachItem.starting_price}`}</span>
                  )}
                </p>

                <p className="text-xs font-medium">{eachItem.brand}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        <a
          href="#"
          className="text-link hover:text-secondary_dark font-medium text-sm"
        >
          {link}
        </a>
      </div>
    </div>
  );
};

export default HeadphonesSection;
