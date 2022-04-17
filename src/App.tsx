import React, { Fragment, FunctionComponent } from "react";
import Router from "router";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "localization/en.json";
import fr from "localization/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en,
    fr,
  },
  lng: localStorage.getItem("lng") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const App: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <Router />
    </Fragment>
  );
};

export default App;
