import React from "react";
import PropTypes from "prop-types";

export default function Notification({ message }) {
  return <h3>{message}</h3>;
}

Notification.defaultProps = {
  message: "No message",
};

Notification.propTypes = {
  message: PropTypes.string,
};
