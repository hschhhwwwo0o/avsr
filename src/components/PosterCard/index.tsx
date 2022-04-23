import React, { Fragment, FunctionComponent } from "react";
import { IPoster } from "types";
import { NavLink } from "react-router-dom";
import Avatar from "components/Avatar";

interface IPosterCard {
  data?: IPoster;
}

const PosterCard: FunctionComponent<IPosterCard> = ({ data }) => {
  return (
    <Fragment>
      <NavLink to={`/poster/${data?._id}`} className="POSTER_CARD">
        <div className="p-8 border-r border-b border-[#EBEBEB] h-full cursor-pointer">
          <div className="p-4 h-[70vw] flex items-center justify-center sm:p-10 sm:h-[40vw] lg:h-[25vw]">
            <img className="object-cover" src={data?.image} alt="" />
          </div>
          <div className="mt-6">
            <span className="block truncate max-w-[70vw]">
              <span className="uppercase text-xl font-semibold">{data?.title}</span>
            </span>
          </div>
          <div className="mt-4 flex flex-row items-center gap-4">
            <Avatar string={data?.user.name} />
            <span className="uppercase text-sm font-semibold">{data?.user.name}</span>
          </div>
        </div>
      </NavLink>
    </Fragment>
  );
};

export default PosterCard;
