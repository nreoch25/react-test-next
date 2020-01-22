import React from "react";
import ReactDOM from "react-dom";
import IndexPage from "../pages/index";

test("renders without error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<IndexPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
