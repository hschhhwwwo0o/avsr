import React, { Fragment, FunctionComponent } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import User from "store/User";

const Profile: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div>
        {!User.user.email && (
          <span className="uppercase text-sm font-medium cursor-pointer">
            <NavLink to="/create-an-account">{t("Authorization")}</NavLink>
          </span>
        )}
      </div>
    </Fragment>
  );
};

export default observer(Profile);
