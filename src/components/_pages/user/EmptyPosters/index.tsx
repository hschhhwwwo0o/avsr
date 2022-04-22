import Button from "components/Button";
import React, { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import User from "store/User";

const EmptyPosters: FunctionComponent<{ id: string }> = ({ id }) => {
  const { t } = useTranslation();
  const isMyUser = id === User.user.id;

  return (
    <Fragment>
      {isMyUser ? (
        <span className="flex flex-col items-center justify-center w-full gap-7">
          <span className="max-w-md text-center">{t("You don't seem to have any posters")}</span>
          <NavLink to="/generate-poster" className={"underline inline"}>
            <Button>{t("Generate")}</Button>
          </NavLink>
        </span>
      ) : (
        <span className="block text-center w-full">{t("Users don't have posters")}</span>
      )}
    </Fragment>
  );
};

export default EmptyPosters;
