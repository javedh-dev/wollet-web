import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppWrapper from "../app-wrapper/AppWrapper";
import DashBoard from "../dashboard/DashBoard";

export default class AppRoutes extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<AppWrapper />}>
            <Route index element={<DashBoard />} />
          </Route>
          <Route path={"*"} element={<div>404 Error</div>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
