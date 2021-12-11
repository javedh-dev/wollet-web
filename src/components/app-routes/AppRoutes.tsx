import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import AppWrapper from "../app-wrapper/AppWrapper";

export default class AppRoutes extends React.Component<{}, {}> {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path={"/"} element={<AppWrapper />} />
        </Routes>
      </HashRouter>
    );
  }
}
