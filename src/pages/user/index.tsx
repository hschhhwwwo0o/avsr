import React, { Fragment } from "react";
import { Page } from "types";
import TheLayout from "layouts";
import UserProfile from "components/_pages/user/UserProfile";
import UserPosters from "components/_pages/user/UserPosters";

const UserPage: Page = () => {
  return (
    <Fragment>
      <TheLayout>
        <UserProfile />
        <UserPosters />
      </TheLayout>
    </Fragment>
  );
};

export default UserPage;
