import React from "react";
import PropTypes from "prop-types";

import styles from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <div className={styles.buttons}>
        {options.map((option) => (
          <button
            key={option}
            className={styles.button}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

FeedbackOptions.defaultProps = {
  options: ["good", "neutral", "bad"],
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
