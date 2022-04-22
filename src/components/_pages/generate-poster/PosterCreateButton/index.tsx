import React, { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface IPosterCreateButton {
  onClickHandler?: () => any;
}

const PosterCreateButton: FunctionComponent<IPosterCreateButton> = ({ onClickHandler = () => {} }) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <button
        onClick={onClickHandler}
        className="px-8 bg-white border-[#EAEAEA] border-r border-l border-b text-sm uppercase whitespace-nowrap py-3 lg:py-0"
      >
        {t("Create")}
      </button>
    </Fragment>
  );
};

export default PosterCreateButton;
