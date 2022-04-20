import Avatar from "components/Avatar";
import React, { Fragment, FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const ArtPreview: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="lg:h-[849px] w-full flex flex-col lg:flex-row">
        <div className="lg:w-[70%] border-[#EAEAEA] border-b h-full bg-[#FCFCFC] flex items-center justify-center">
          <div className="w-[80vw] h-[80vw] border-[#EAEAEA] border lg:w-[642px] lg:h-[642px] bg-white flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1650208312823-4a676f114aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              className="w-[60vw] h-[60vw] lg:w-[518px] lg:h-[518px]"
              alt=""
            />
          </div>
        </div>
        <div className="lg:w-[30%] border-[#EAEAEA] border-l border-b h-full flex items-center justify-center px-4 lg:px-16 py-10">
          <div>
            <h2 className="text-2xl lg:text-4xl font-semibold">A Brief Inquiry Into Online Relationships</h2>
            <NavLink to="/user/0" className="flex flex-row gap-4 items-center mt-4">
              <Avatar size="medium" />
              <span className="uppercase font-semibold">itoko toma</span>
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ArtPreview;
