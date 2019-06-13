import React, { useMemo } from "react";
import PropTypes from "prop-types";

const Pagination = ({ pagination: { totalPages, page }, onChange }) => {
  const pages = useMemo(() => new Array(totalPages).fill(null), [totalPages]);

  return (
    <nav aria-label="Data grid navigation">
      <ul className="pagination justify-content-end">
        <li
          onClick={() => page > 1 && onChange(page - 1)}
          className={`page-item ${page === 1 ? "disabled" : ""}`}
        >
          <span className="page-link" tabIndex="-1">
            Previous
          </span>
        </li>
        {pages.map((_, idx) => (
          <li
            key={`page-${idx + 1}`}
            onClick={() => onChange(idx + 1)}
            className={`page-item ${idx + 1 === page ? "active" : ""}`}
          >
            <span className="page-link">
              {idx + 1} <span className="sr-only">(current)</span>
            </span>
          </li>
        ))}
        <li
          onClick={() => page < totalPages && onChange(page + 1)}
          className={`page-item ${page === totalPages ? "disabled" : ""}`}
        >
          <span className="page-link">Next</span>
        </li>
      </ul>
    </nav>
  );
};

Pagination.defaultProps = {
  onChange: () => {},
  pagination: {
    page: 1,
    totalPages: 1
  }
};

Pagination.propTypes = {
  pagination: PropTypes.shape({
    totalPages: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired
  }),
  onChange: PropTypes.func.isRequired
};

export default Pagination;
