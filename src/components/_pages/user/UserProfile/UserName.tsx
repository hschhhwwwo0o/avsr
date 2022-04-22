import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import { useUser } from "hooks/useUser";
import User from "store/User";

const UserName: FunctionComponent = () => {
  const { userResponse, userMutation } = useUser();
  const [username, setUsername] = useState<string>("");
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const isMyUser = userResponse?.data?._id === User.user.id;

  useEffect(() => {
    if (userResponse?.data && isFirstRender) {
      setUsername(userResponse?.data?.name);
      setIsFirstRender(false);
    }
  }, [userResponse?.data]);

  useEffect(() => {
    if (username) userMutation.mutate({ name: username });
  }, [username]);

  return (
    <Fragment>
      {isMyUser ? (
        <input
          placeholder="Enter your name..."
          className="uppercase font-bold text-xl mt-7 outline-none text-center bg-white"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      ) : (
        <span className="uppercase font-bold text-xl mt-7">{username}</span>
      )}
    </Fragment>
  );
};

export default UserName;
