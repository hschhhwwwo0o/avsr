import React, { Fragment, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "components/Avatar";
import { useGetPoster } from "hooks/useGetPoster";

const PosterPreview: FunctionComponent = () => {
  const { posterResponse } = useGetPoster();

  return (
    <Fragment>
      <div className="w-full flex flex-col lg:h-[849px] lg:flex-row">
        <div className="border-[#EAEAEA] border-b h-[400px] bg-[#FCFCFC] flex items-center justify-center lg:h-full lg:w-[70%]">
          <div className="w-[80vw] h-[80vw] border-[#EAEAEA] border bg-white flex items-center justify-center lg:w-[642px] lg:h-[642px]">
            {posterResponse?.data?.posterResponse && (
              <img
                src={posterResponse?.data?.posterResponse?.image}
                className="w-[60vw] h-[60vw] lg:w-[518px] lg:h-[518px] border-none"
                alt=""
              />
            )}
          </div>
        </div>
        <div className="border-[#EAEAEA] border-l border-b h-full flex items-center justify-center px-4 py-10 lg:px-16 lg:w-[30%]">
          {posterResponse?.data?.posterResponse && (
            <div className="w-full">
              <h2 className="text-2xl font-semibold lg:text-4xl uppercase">
                {posterResponse?.data?.posterResponse.title}
              </h2>
              <NavLink
                to={`/user/${posterResponse?.data?.morePosterResponse?.data[0].user._id}`}
                className="flex flex-row gap-4 items-center mt-4"
              >
                <Avatar size="medium" string={posterResponse?.data?.morePosterResponse?.data[0].user.name} />
                <span className="uppercase font-semibold">
                  {posterResponse?.data?.morePosterResponse?.data[0].user.name}
                </span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default PosterPreview;
