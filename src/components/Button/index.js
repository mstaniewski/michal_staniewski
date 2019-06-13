import React from "react";
import { Link } from "react-router-dom";

const Button = ({ href, label, onClick, type }) => {
  if (href) {
    return (
      <Link className="btn btn-primary" to={href}>
        {label}
      </Link>
    );
  } else {
    return (
      <button type={type} onClick={onClick} className="btn btn-primary">
        {label}
      </button>
    );
  }
};

export default Button;
