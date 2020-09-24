import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types";
import styles from "./common.module.css";
import svgDown from "../images/down.svg";
import svgUp from "../images/up.svg";

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

export const Container320 = ({ className, children }) => (
  <div
    className={`${styles.container320} ${className}`}
  >
    {children}
  </div>
);

Container320.propTypes = {
  className: PropTypes.string,
};

Container320.defaultProps = {
  className: "",
};


export const Padding = ({x, y}) => (
  <div style={{paddingLeft: x, height: y, minHeight: 1}}/>
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

export const MobileSimpleTop = ({title, desc}) => (
  <div>
    <Padding y={50}/>
    <div className={styles.mobileSimpleTopTitle}>
      {title}
    </div>
    <Padding y={20}/>
    <div className={styles.mobileSimpleTopDesc}>
      {desc}
    </div>
  </div>
);

export const DropDownQNA = ({ isFirst, title, content, children, titleClassName, bodyClassName }) => {
  const [isShow, setShow] = useState(false);

  return (
    <div className={styles.dropDownQNA}>
      <div
        role="presentation"
        className={`${styles.dropDownQNATitle} ${titleClassName}`}
        onClick={() => setShow(!isShow)}
      >
        <span className={isShow ? styles.open : ""} >
          {title}
        </span>
        <img
          src={isShow ? svgUp : svgDown}
          alt="자세히 보기" />
      </div>
      {isShow && (
        <div className={`${styles.dropDownQNABody} ${bodyClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export const SupportEmail = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
          }
        }
      }
    `
  );
  const email = data.site.siteMetadata.email;
  return (
    <a href={`mailto:${email}`} >
      {email}
    </a>
  );
}

export const Switch = ({ isActive, onChange }) => {
  const id = Math.random().toString();
  return (
    <div className={styles.switch}>
      <input
        id={id}
        type="checkbox"
        className={styles.switchInput}
        checked={isActive}
        onChange={(evt) => onChange(evt.target.checked)}
      />
      <label
        htmlFor={id}
        className={styles.switchLabel}>
      </label>
    </div>
  );
};

export const Ribbon = ({className, children}) => (
  <div className={`${styles.ribbon} ${styles.ribbonTopLeft} ${className || ""}`}>
    <span>
      {children}
    </span>
  </div>
);
