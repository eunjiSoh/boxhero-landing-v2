/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */


import React from "react"

// https://isamrish.com/how-to-add-3rd-party-script-in-your-gatsby-website/

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }, pluginOptions) => {
  setHeadComponents([
    <link
      key="font-SpoqaHanSans"
      href="https://cdn.bgp.works/boxhero-fonts/SpoqaHanSans_20200227/SpoqaHanSans-kr-fallback.css"
      rel="stylesheet"
      type="text/css"
    />,
    // https://github.com/nuxodin/ie11CustomProperties
    <script
      key="cssVariableIEPolyfill"
      dangerouslySetInnerHTML={{
        __html: `window.MSInputMethodContext && document.documentMode && document.write('<script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"><\\x2fscript>');`,
      }}/>
  ])

  setPostBodyComponents([
  ])
}
// https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js
