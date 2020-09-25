import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
// js
import { Container320 } from "./common"
import { urlStart } from "../components/constants";
// css
import styles from "./mobile-header.module.css";
// images
import svgBiWhite from "../images/bi-white.svg";
import svgBiBlue from "../images/bi-blue.svg";

export const MobileHeader = ({ isFloatMenu, curMenu }) => {
  // 여기서 이상한 워닝 뜨는건 gatsby-plugin-react-i18next의 이슈. 기능상 문제는 없는 듯. https://github.com/microapps/gatsby-plugin-react-i18next/issues/5
  const { t } = useTranslation();
  const [ isShow, onChangeIsShow ] = useState(false);
  const [ isScrolled, onChangeIsScrolled ] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 80;
      if (isScrolled !== scrolled) {
        onChangeIsScrolled(scrolled);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  const isWhite = !isFloatMenu || isScrolled || isShow;
  return (
    <>
      <header className={`${styles.headerContainer} ${isWhite ? styles.whiteContainer : ""}`}>
        <Container320 className={styles.menuContainer}>
          <div className={styles.logoAndExpandCotainer}>
            <Link to="/">
              <img
                src={isWhite ? svgBiBlue : svgBiWhite}
                className={styles.biLogo}
                alt="Home" />
            </Link>
            <button onClick={() => onChangeIsShow(!isShow)} >
              Open
            </button>
          </div>
          {isShow &&
           <>
             <div className={`${styles.splitLine} ${styles.menuItem}`}>
               <Link
                 to="/about/"
                 className={curMenu === "about" ? styles.selected : ""}>
                 {t("header:menuAbout")}
               </Link>
             </div>

             <div className={`${styles.splitLine} ${styles.menuItem}`}>
               <Link
                 to="/features/"
                 className={curMenu === "features" ? styles.selected : ""}>
                 {t("header:menuFeatures")}
               </Link>
             </div>

             <div className={`${styles.splitLine} ${styles.menuItem}`}>
               <Link
                 to="/pricing/"
                 className={curMenu === "pricing" ? styles.selected : ""}>
                 {t("header:menuPricing")}
               </Link>
             </div>

             <div className={styles.menuItem}>
               <a href={t("url:doc")}>
                 {t("header:menuDoc")}
               </a>
             </div>

             <div className={styles.startNowContainer}>
               <a href={urlStart}>
                 <button className={styles.startNowButton}>
                   {t("header:menuLoginButton")}
                 </button>
               </a>
             </div>
           </>}
        </Container320>
      </header>
      {!isFloatMenu &&
       <div className={styles.headerPlaceholder}>
       </div>
      }
    </>
  );
};

MobileHeader.propTypes = {
  isFloatMenu: PropTypes.bool,
};

MobileHeader.defaultProps = {
  isFloatMenu: false,
};

export default MobileHeader;