import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { AuthProvider } from "../../context/auth.context";
const favIcon = require("../../images/icon.png");

const Layout = ({ children, pageTitle, description = "", url = "" }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <html lang="pt-br" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Idea!Zarvos" />

        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={description} />

        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        {/* <meta name="keywords" content={keywordsContent} /> */}
        <meta name="image" content={favIcon} />
        <link rel="canonical" href={url} />
        <link rel="icon" href={favIcon} />
        <link rel="apple-touch-icon" sizes="180x180" href={favIcon} />
        <link rel="icon" type="image/png" sizes="192x192" href={favIcon} />
        <link rel="icon" type="image/png" sizes="256x256" href={favIcon} />
        <link rel="mask-icon" href={favIcon} />
        <link rel="icon" type="image/png" sizes="16x16" href={favIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favIcon} />
        <link rel="apple-touch-icon" sizes="57x57" href={favIcon} />
        <link rel="apple-touch-icon" sizes="60x60" href={favIcon} />
        <link rel="apple-touch-icon" sizes="72x72" href={favIcon} />
        <link rel="apple-touch-icon" sizes="76x76" href={favIcon} />
        <link rel="apple-touch-icon" sizes="120x120" href={favIcon} />
        <link rel="apple-touch-icon" sizes="114x114" href={favIcon} />
        <link rel="apple-touch-icon" sizes="144x144" href={favIcon} />
        <link rel="apple-touch-icon" sizes="152x152" href={favIcon} />
      </Helmet>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
  pageTitle: PropTypes.node,
  description: PropTypes.string,
};

export default Layout;
