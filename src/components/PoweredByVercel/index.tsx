import React, { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

const PoweredByVercel: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <div className="h-12 uppercase font-semibold text-xs flex items-center justify-center bg-[#252525] text-white">
        <a target="_blank" rel="noopener noreferrer" href="https://vercel.com/dashboard">
          {t("Powered by Vercel")}
        </a>
      </div>
    </Fragment>
  );
};

export default PoweredByVercel;
