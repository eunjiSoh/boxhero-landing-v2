import React from "react";
import PropTypes from "prop-types";
import styles from "./common.module.css";

export const Container1024 = ({ className, children }) => (
  <div
    className={`${styles.container1024} ${className}`}
  >
    {children}
  </div>
);

Container1024.propTypes = {
  className: PropTypes.string,
};

Container1024.defaultProps = {
  className: "",
};


export const Padding = ({x, y}) => (
  <div style={{width: x, height: y}}/>
);

Padding.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

Padding.defaultProps= {
  x: 0,
  y: 0,
};

export const SimpleTop = ({title, desc}) => (
  <div>
    <Padding y={100}/>
    <div className={styles.simpleTopTitle}>
      {title}
    </div>
    <Padding y={30}/>
    <div className={styles.simpleTopDesc}>
      {desc}
    </div>
  </div>
);
