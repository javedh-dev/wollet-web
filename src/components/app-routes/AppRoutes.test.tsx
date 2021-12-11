import React from "react";
import { render } from "@testing-library/react";
import AppRoutes from "./AppRoutes";

test("routes are rendered", () => {
  let routes = render(<AppRoutes />);
  expect(routes).toBeTruthy();
});
