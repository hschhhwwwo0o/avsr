import React, { Fragment, FunctionComponent } from "react";
import { useUser } from "hooks/useUser";
import Avatar from "components/Avatar";

const UserAvatar: FunctionComponent = () => {
  const { userResponse } = useUser();

  return (
    <Fragment>
      <Avatar size="big" string={userResponse?.data?.name} image={userResponse?.data?.image} />
    </Fragment>
  );
};

export default UserAvatar;
