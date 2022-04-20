import React, { FunctionComponent, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomePage from "pages/home";
import UserPage from "pages/user";
import PosterPage from "pages/poster";
import GeneratePosterPage from "pages/generate-poster";
import SignInPage from "pages/sign-in";
import CreateAnAccountPage from "pages/create-an-account";

const Router: FunctionComponent = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-an-account" element={<CreateAnAccountPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/generate-poster" element={<GeneratePosterPage />} />
      <Route path="/poster/:id" element={<PosterPage />} />
      <Route path="/user/:id" element={<UserPage />} />
    </Routes>
  );
};

export default Router;
