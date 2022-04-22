import React, { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface IRegenearteArtButton {
  onClickHandler?: () => any;
}

const RegenearteArtButton: FunctionComponent<IRegenearteArtButton> = ({ onClickHandler = () => {} }) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <button
        onClick={onClickHandler}
        className="px-8 bg-white text-sm whitespace-nowrap uppercase py-3 border-[#EAEAEA] border-x lg:border-none lg:bg-[#252525] lg:text-white lg:py-0"
      >
        {t("Regenerate")}
      </button>
    </Fragment>
  );
};

export default RegenearteArtButton;
