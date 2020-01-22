import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import IndexPage from "../pages/index";

describe("Index Page", () => {
  it("matches the snapshot", () => {
    const wrapper = shallow(<IndexPage />);
    const appComponent = wrapper.find("[data-test='component-index-page']");
    expect(appComponent.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
