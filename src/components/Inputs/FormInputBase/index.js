import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const FormInputBase = ({
  isHeadless = false,
  isRequired = false,
  label,
  component: Component,
  inputProps = {},
  ...props
}) => {
  const [error, setError] = useState(null);
  const [isTouched, setIsTouched] = useState(false);

  const handleInputChange = input => {
    setIsTouched(true);

    if (isRequired && input.value.length < 1) {
      setError("This field is required");
    } else {
      setError(null);
    }
  };

  const enhancedInputProps = {
    ...inputProps,
    required: isRequired,
    onBlur: e => {
      setIsTouched(true);
      handleInputChange(e.target);
      if (typeof inputProps.onBlur === "function") {
        inputProps.onBlur();
      }
    },
    onChange: e => {
      setIsTouched(true);
      handleInputChange(e.target);
      if (typeof inputProps.onBlur === "function") {
        inputProps.onBlur();
      }
    }
  };

  return (
    <div className="form-group">
      {!isHeadless && (
        <div className="form-input-base-heading">
          <label>
            {label}{" "}
            {isRequired && (
              <span className="form-input-base-heading-required">*</span>
            )}{" "}
          </label>
          {isTouched && error && <span>{error}</span>}
        </div>
      )}

      <Component hasError={error} {...props} inputProps={enhancedInputProps} />
    </div>
  );
};

FormInputBase.defaultProps = {
  component: () => null
};

FormInputBase.propTypes = {
  isHeadless: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  component: PropTypes.func.isRequired,
  inputProps: PropTypes.shape({})
};

export default FormInputBase;
