import React from "react";
import { shallow, mount } from "enzyme";
import Table, { TableActions } from "./index";

const TEST_TABLE_PROPS = {
  fields: [
    { title: "Id", column: "id" },
    { title: "Name", column: "name" },
    { title: "Species", column: "species" },
    { title: "Gender", column: "gender" },
    { title: "Homeworld", column: "homeworld" },
    {
      title: "Actions",
      component: ({ id }) => <TableActions onDelete={() => {}} />
    }
  ],
  data: [],
  isFetching: false
};

describe("<Table />", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Table {...TEST_TABLE_PROPS} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render proper number of columns", () => {
    const wrapper = mount(<Table {...TEST_TABLE_PROPS} />);
    expect(wrapper.find("th")).toHaveLength(TEST_TABLE_PROPS.fields.length);
  });

  it("should render proper columns headings", () => {
    const wrapper = mount(<Table {...TEST_TABLE_PROPS} />);
    wrapper.find("th").forEach((node, idx) => {
      expect(node.text()).toEqual(TEST_TABLE_PROPS.fields[idx].title);
    });
  });
});
