import React from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "./app-navbar/AppNavbar";

export default class AppWrapper extends React.Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Outlet />
      </div>
    );
  }
}
