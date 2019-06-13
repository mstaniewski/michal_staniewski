import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useAsync } from "hooks";

import {
  requestCharacters,
  removeCharacter,
  setFilters,
  setPage
} from "actions/characters";
import withReducer from "hocs/withReducer";

import Table, { TableActions } from "components/Table";
import SearchBar from "components/SearchBar";

const ListView = ({
  requestCharacters,
  removeCharacter,
  isFetching,
  items = [],
  filters,
  setFilters,
  setPage,
  pagination
}) => {
  useAsync(requestCharacters, filters, [filters]);

  const onResultsSort = useCallback(
    column => {
      if (!column) return;
      setFilters({
        _sort: column,
        _order: filters._order === "asc" ? "desc" : "asc"
      });
    },
    [filters._order, filters._sort]
  );

  return (
    <>
      <h1>List View</h1>
      <div className="row">
        <SearchBar onChange={setFilters} />
        <div className="col-sm-6 text-sm-right">
          <Link to="/add" className="btn btn-primary mb-3">
            Add New
          </Link>
        </div>
      </div>
      <Table
        isFetching={isFetching}
        onSort={onResultsSort}
        onPageChange={setPage}
        fields={[
          { title: "Id", column: "id" },
          { title: "Name", column: "name" },
          { title: "Species", column: "species" },
          { title: "Gender", column: "gender" },
          { title: "Homeworld", column: "homeworld" },
          {
            title: "Actions",
            component: ({ id }) => (
              <TableActions onDelete={() => removeCharacter(id)} />
            )
          }
        ]}
        data={items}
        pagination={pagination}
      />
    </>
  );
};

const mapStateToProps = state => ({
  items: state.items,
  isFetching: state.isFetching,
  filters: state.filters,
  pagination: state.pagination
});

export default withReducer("characters", mapStateToProps, {
  requestCharacters,
  removeCharacter,
  setFilters,
  setPage
})(ListView);
