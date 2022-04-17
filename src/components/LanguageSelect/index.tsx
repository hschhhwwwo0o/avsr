import React, { Fragment, FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import USA from "icons/USA/index";
import FR from "icons/FR";

const LanguageSelect: FunctionComponent = () => {
  const { t, i18n } = useTranslation();

  function onChangeLanguage() {
    if (localStorage.getItem("lng") === "en") {
      i18n.changeLanguage("fr");
      localStorage.setItem("lng", "fr");
      return;
    }
    if (localStorage.getItem("lng") === "fr") {
      i18n.changeLanguage("en");
      localStorage.setItem("lng", "en");
      return;
    }
    i18n.changeLanguage("fr");
    localStorage.setItem("lng", "fr");
  }

  return (
    <Fragment>
      <button className="h-[27px] flex flex-row gap-2 items-center px-1 rounded-sm" onClick={onChangeLanguage}>
        {t("lng") === "en" && <USA />}
        {t("lng") === "fr" && <FR />}
        <span className="text-xs font-medium uppercase">{t("lng")}</span>
      </button>
    </Fragment>
  );
};

export default LanguageSelect;
