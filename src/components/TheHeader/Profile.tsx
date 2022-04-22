import React, { Fragment, FunctionComponent } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import User from "store/User";
import Avatar from "components/Avatar";

const Profile: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div>
        {!User.user.email ? (
          <span className="uppercase text-sm font-medium cursor-pointer">
            <NavLink to="/create-an-account">{t("Authorization")}</NavLink>
          </span>
        ) : (
          <NavLink to={`/user/${User.user.id}`} className="flex flex-row gap-3 items-center">
            <span className="uppercase text-sm font-semibold">Profile</span>
            <Avatar string={User.user.name} />
          </NavLink>
        )}
      </div>
    </Fragment>
  );
};

export default observer(Profile);
