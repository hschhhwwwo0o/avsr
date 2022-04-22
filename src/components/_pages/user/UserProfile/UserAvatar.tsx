import React, { Fragment, FunctionComponent } from "react";
import { useUser } from "hooks/useUser";
import Avatar from "components/Avatar";

const UserAvatar: FunctionComponent = () => {
  const { data } = useUser();

  return (
    <Fragment>
      <Avatar size="big" string={data?.name} image={data?.image} />
    </Fragment>
  );
};

export default UserAvatar;
