import React, { Fragment, FunctionComponent } from "react";
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";

const UserProfile: FunctionComponent = () => {
  return (
    <Fragment>
      <div className="py-16 flex flex-col justify-center items-center">
        <UserAvatar />
        <UserName />
      </div>
    </Fragment>
  );
};

export default UserProfile;
