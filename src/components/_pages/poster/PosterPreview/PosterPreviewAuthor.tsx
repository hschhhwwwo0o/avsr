import React, { Fragment, FunctionComponent } from "react";
import Avatar from "components/Avatar";
import { NavLink } from "react-router-dom";

interface IPosterAuthor {
  id?: string;
  name?: string;
}

const PosterAuthor: FunctionComponent<IPosterAuthor> = ({ id = "", name = "" }) => {
  return (
    <Fragment>
      <NavLink to={`/user/${id}`} className="flex flex-row gap-4 items-center mt-4">
        <Avatar size="medium" string={name} />
        <span className="uppercase font-semibold">{name}</span>
      </NavLink>
    </Fragment>
  );
};

export default PosterAuthor;
