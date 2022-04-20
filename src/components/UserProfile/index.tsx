import Avatar from "components/Avatar";
import React, { Fragment, FunctionComponent } from "react";

const UserProfile: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="py-16 flex flex-col justify-center items-center">
        <Avatar size="big" />
        <span className="uppercase font-bold text-xl mt-7">itoko toma</span>
      </div>
    </Fragment>
  );
};

export default UserProfile;
