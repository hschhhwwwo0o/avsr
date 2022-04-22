import React, { Fragment, FunctionComponent } from "react";
import Router from "router";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "localization/en.json";
import fr from "localization/fr.json";
import ch from "localization/ch.json";
import { BrowserRouter } from "react-router-dom";
import { useReAuthenticateUser } from "hooks/useReAuthenticateUser";

i18n.use(initReactI18next).init({
  resources: {
    en,
    fr,
    ch,
  },
  lng: localStorage.getItem("lng") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const App: FunctionComponent = ({ children }) => {
  useReAuthenticateUser();
  return (
    <Fragment>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
