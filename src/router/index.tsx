import React, { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "pages/home";

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
