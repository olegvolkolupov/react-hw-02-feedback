import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

export default function Statistics({ good, neutral, bad, total }) {
  // процент положительных отзывов
  let positivePercentage = Math.ceil((good / total) * 100);
  return (
    <div>
      <p>
        <span className={styles.goodTitle}>Good:</span>
        <span className={styles.numbers}>{good}</span>
      </p>
      <p>
        <span className={styles.neutralTitle}>Neutral:</span>
        <span className={styles.numbers}>{neutral}</span>
      </p>
      <p>
        <span className={styles.badTitle}>Bad:</span>
        <span className={styles.numbers}>{bad}</span>
      </p>
      <hr />
      <p>
        <span className={styles.totalTitle}>Total:</span>
        <span className={styles.totalNumbers}>{total}</span>
      </p>
      <p>
        <span className={styles.totalTitle}>Positive feedback:</span>
        <span className={styles.totalNumbers}>{positivePercentage}%</span>
      </p>
    </div>
  );
}

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
