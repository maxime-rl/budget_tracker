import React from "react";
import PropTypes from "prop-types";

export default function Input({ ...props }) {
  const { type, name, value, min, max, onChange, required } = props;

  return (
    <input
      className="p-1 border-2 rounded-sm border-slate-300"
      type={type}
      name={name}
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      required={required}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
