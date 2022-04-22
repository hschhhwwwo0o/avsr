import React, { Fragment, FunctionComponent } from "react";
import { useUserData } from "hooks/useUserData";
import Avatar from "components/Avatar";

const UserAvatar: FunctionComponent = () => {
  const { userResponse } = useUserData();

  return (
    <Fragment>
      <Avatar size="big" string={userResponse?.data?.name} image={userResponse?.data?.image} />
    </Fragment>
  );
};

export default UserAvatar;
