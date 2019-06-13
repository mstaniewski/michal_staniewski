import React from "react";

const Select = ({ options = [], name }) => (
  <select className="form-control" name={name}>
    {options.map(option => (
      <option value={option} key={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Select;
