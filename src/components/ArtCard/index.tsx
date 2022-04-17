import React, { Fragment, FunctionComponent } from "react";

const ArtCard: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="p-8 border-r border-b border-[#EBEBEB] h-full cursor-pointer">
        <div className="p-4 h-[70vw] sm:p-10 sm:h-[40vw] lg:h-[25vw]">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1650178294065-b396e503853d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div className="mt-6">
          <span className="uppercase text-xl font-semibold">a brief inquiry into online relationships</span>
        </div>
        <div className="mt-4 flex flex-row items-center gap-4">
          <div className="w-8 h-8 overflow-hidden rounded-full bg-gray-400">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1650178294065-b396e503853d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <span className="uppercase text-sm font-semibold">Itoko Toma</span>
        </div>
      </div>
    </Fragment>
  );
};

export default ArtCard;
