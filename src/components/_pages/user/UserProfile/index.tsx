import React, { Fragment, FunctionComponent } from "react";
import Avatar from "components/Avatar";
import { useGetUser } from "hooks/useGetUser";

const UserProfile: FunctionComponent = () => {
  const { data } = useGetUser();

  return (
    <Fragment>
      <div className="py-16 flex flex-col justify-center items-center">
        <Avatar size="big" string={data?.name} />
        <span className="uppercase font-bold text-xl mt-7">{data?.name}</span>
      </div>
    </Fragment>
  );
};

export default UserProfile;
