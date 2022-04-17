import React, { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Profile: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div>
        <div className="uppercase text-sm font-medium cursor-pointer">
          <NavLink to="/create-an-account">{t("Authorization")}</NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
