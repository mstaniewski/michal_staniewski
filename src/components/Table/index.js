import React from "react";
import PropTypes from "prop-types";

import Pagination from "components/Pagination";

import withLoader from "hocs/withLoader";

const Table = ({
  fields = [],
  data = [],
  onSort,
  pagination,
  onPageChange
}) => {
  return (
    <>
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            {fields.map(({ title, column }) => (
              <th
                onClick={() => onSort(column)}
                key={`${title}-heading`}
                scope="col"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!data.length && (
            <tr>
              <td className="pt-4 pb-4 text-center" colspan={fields.length}>
                Sorry. No results found
              </td>
            </tr>
          )}
          {data &&
            data.map(entity => (
              <tr key={`row-${entity.id}`}>
                {fields.map(({ column, component: Component }) => (
                  <td key={`${column}-${entity.id}`}>
                    {Component ? <Component {...entity} /> : entity[column]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination onChange={onPageChange} pagination={pagination} />
    </>
  );
};

Table.defaultProps = {
  inputProps: {}
};

Table.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isFetching: PropTypes.bool.isRequired
};

export { default as TableActions } from "./components/TableActions";

export default withLoader(({ isFetching }) => isFetching)(Table);
