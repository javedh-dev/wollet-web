import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppWrapper from "../app-wrapper/AppWrapper";

export default class AppRoutes extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter basename={"/wollet-web"}>
        <Routes>
          <Route path={"/"} element={<AppWrapper />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
