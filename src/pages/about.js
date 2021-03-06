import React from "react";
import { graphql } from "gatsby";
import { useI18next } from '@jbseo/gatsby-plugin-react-i18next';
// js
import SEO from "../components/seo";
import { Media } from "../media"
import DesktopAbout from "../components/desktop-about";
import MobileAbout from "../components/mobile-about";
import { useHelpscout } from '../components/helpscout';

const AboutPage = ({data}) => {
  const { language, t } = useI18next();
  useHelpscout();
  return (
    <>
      <SEO
        lang={language}
        title={t("about:pageTitle")}
        description={t("about:pageDescription")}
      />
      <Media at="xs">
        <MobileAbout
          data={data}
          language={language}
          t={t}
        />
      </Media>
      <Media greaterThan="xs">
        <DesktopAbout
          data={data}
          language={language}
          t={t}
        />
      </Media>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  query($language: String!) {
    topBg: file(relativePath: { eq: "about-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    topLogo: file(relativeDirectory: {eq: $language},
                  base: { eq: "about-top.png" }) {
      childImageSharp {
        fixed(width: 697,
          traceSVG: {
            turdSize: 1,
            color: "#f0f0f31f",
            threshold: 160,
            alphaMax: 1,
            turnPolicy: TURNPOLICY_MAJORITY
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    light: file(relativePath: { eq: "emoji-light.png" }) {
      childImageSharp {
        fixed(width: 72, height: 72, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    easy: file(relativeDirectory: {eq: $language},
               base: { eq: "img-easy.png" }) {
      childImageSharp {
        fixed(width: 673,
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY,
            turdSize: 1,
            alphaMax: 1,
            color: "#f0f0f3",
            threshold: 160
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    great: file(relativePath: { eq: "img-great.png" }) {
      childImageSharp {
        fixed(width: 660,
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY,
            turdSize: 1,
            alphaMax: 1,
            color: "#f0f0f3",
            threshold: 160
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobile: file(relativePath: { eq: "img-mobile.png" }) {
      childImageSharp {
        fixed(width: 463,
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY,
            turdSize: 1,
            alphaMax: 1,
            color: "#f0f0f3",
            threshold: 160
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featureBg: file(relativePath: { eq: "about-feature-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 2560, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mobileTopBg: file(relativePath: { eq: "about-top-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 533, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    mobileTopLogo: file(relativeDirectory: {eq: $language},
                        base: { eq: "about-top.png" }) {
      childImageSharp {
        fixed(width: 320,
          traceSVG: {
            turdSize: 1,
            color: "#f0f0f31f",
            threshold: 160,
            alphaMax: 1,
            turnPolicy: TURNPOLICY_MAJORITY
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileLight: file(relativePath: { eq: "emoji-light.png" }) {
      childImageSharp {
        fixed(width: 36, height: 36, fit: FILL) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    mobileEasy: file(relativeDirectory: {eq: $language},
                     base: { eq: "img-easy.png" }) {
      childImageSharp {
        fixed(width: 300,
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY,
            turdSize: 1,
            alphaMax: 1,
            color: "#f0f0f3",
            threshold: 160
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileGreat: file(relativePath: { eq: "img-great.png" }) {
      childImageSharp {
        fixed(width: 300,
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY,
            turdSize: 1,
            alphaMax: 1,
            color: "#f0f0f3",
            threshold: 160
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileMobile: file(relativePath: { eq: "img-mobile.png" }) {
      childImageSharp {
        fixed(width: 300,
          traceSVG: {
            turnPolicy: TURNPOLICY_MAJORITY,
            turdSize: 1,
            alphaMax: 1,
            color: "#f0f0f3",
            threshold: 160
          }) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    mobileFeatureBg: file(relativePath: { eq: "about-feature-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 2142, webpQuality: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
