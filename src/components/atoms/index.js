import React from "react";
import PropTypes from "prop-types";

export const Button = ({label, type, onClick}) => {
  return <button className={(!type || type === 'default') ? 'ui button' : `ui ${type} button`} onClick={onClick}>
    {label}
  </button>
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'default',
};