import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => setIsOpen(!isOpen), []);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
      <Link to="/" className="navbar-brand">
        Sonalake Task
      </Link>

      <button
        type="button"
        onClick={onToggle}
        className={"navbar-toggler" + (!isOpen ? " collapsed" : "")}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className={"collapse navbar-collapse" + (isOpen ? " show" : "")}>
        <ul className=" navbar-nav">
          <li className=" nav-item active">
            <Link to="/" className="nav-link">
              List View
              <span className=" sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
