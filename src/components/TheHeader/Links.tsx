import React, { Fragment, FunctionComponent } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import User from "store/User";

const Links: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <li className="text-sm font-medium uppercase hidden md:block">
        <NavLink to="/">{t("Collection")}</NavLink>
      </li>
      {User.user.email && (
        <li className="text-sm font-medium uppercase hidden md:block">
          <NavLink to="/generate-poster">{t("Generate Poster")}</NavLink>
        </li>
      )}
    </Fragment>
  );
};

export default observer(Links);
