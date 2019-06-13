import React from "react";
import Pagination from "./index";
import { shallow } from "enzyme";

const TEST_PAGINATION = {
  page: 1,
  totalPages: 2
};

describe("<Pagination />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Pagination pagination={TEST_PAGINATION} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match proper number of pages", () => {
    const wrapper = shallow(<Pagination pagination={TEST_PAGINATION} />);
    // + 2 because of prev / next controls
    expect(wrapper.find(".page-item")).toHaveLength(
      TEST_PAGINATION.totalPages + 2
    );
  });

  it("should disable previous button when on first page", () => {
    const wrapper = shallow(<Pagination pagination={TEST_PAGINATION} />);
    expect(
      wrapper
        .find(".page-item")
        .first()
        .hasClass("disabled")
    ).toBeTruthy();
  });

  it("should disable previous button when on last page", () => {
    const wrapper = shallow(
      <Pagination
        pagination={{ ...TEST_PAGINATION, page: TEST_PAGINATION.totalPages }}
      />
    );
    expect(
      wrapper
        .find(".page-item")
        .last()
        .hasClass("disabled")
    ).toBeTruthy();
  });

  it("should add active class to current item", () => {
    const wrapper = shallow(
      <Pagination
        pagination={{ ...TEST_PAGINATION, page: TEST_PAGINATION.totalPages }}
      />
    );
    expect(
      wrapper
        .find(".page-item")
        .at(TEST_PAGINATION.totalPages)
        .hasClass("active")
    ).toBeTruthy();
  });
});
