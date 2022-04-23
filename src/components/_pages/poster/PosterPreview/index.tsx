import React, { Fragment, FunctionComponent } from "react";
import { useGetPoster } from "hooks/useGetPoster";
import PosterPreviewTitle from "./PosterPreviewTitle";
import PosterPreviewImage from "./PosterPreviewImage";
import PosterPreviewAuthor from "./PosterPreviewAuthor";

const PosterPreview: FunctionComponent = () => {
  const { posterResponse } = useGetPoster();

  return (
    <Fragment>
      <div className="w-full flex flex-col lg:h-[849px] lg:flex-row">
        <div className="border-[#EAEAEA] border-b h-[400px] bg-[#FCFCFC] flex items-center justify-center lg:h-full lg:w-[70%]">
          <PosterPreviewImage image={posterResponse?.data?.posterResponse?.image} />
        </div>
        <div className="border-[#EAEAEA] border-l border-b h-full flex items-center justify-center px-4 py-10 lg:px-16 lg:w-[30%]">
          {posterResponse?.data?.posterResponse && (
            <div className="w-full">
              <PosterPreviewTitle>{posterResponse?.data?.posterResponse?.title}</PosterPreviewTitle>
              <PosterPreviewAuthor
                id={posterResponse?.data?.morePosterResponse?.data[0]?.user?._id}
                name={posterResponse?.data?.morePosterResponse?.data[0]?.user?.name}
              />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default PosterPreview;
