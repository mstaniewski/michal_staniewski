import React from "react";
import { shallow } from "enzyme";

import FormInputBase from "./index";

describe("<FormInputBase />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<FormInputBase />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should not display heading if isHeadless is true", () => {
    const wrapper = shallow(<FormInputBase isHeadless />);
    expect(wrapper.exists(".form-input-base-heading")).toBeFalsy();
  });

  it("should display asterisk by label if isRequired is true", () => {
    const wrapper = shallow(<FormInputBase isRequired />);
    expect(wrapper.exists(".form-input-base-heading-required")).toBeTruthy();
  });
});
