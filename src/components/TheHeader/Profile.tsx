import React, { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const Profile: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div>
        <div className="uppercase text-sm font-medium cursor-pointer">{t("Authorization")}</div>
      </div>
    </Fragment>
  );
};

export default Profile;
