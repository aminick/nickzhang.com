import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/main.scss";
import favicon from "../favicon.png";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <Navbar />
      <div className="layout-container">
        {children}
        <Footer config={config} />
      </div>
    </>
  );
};

export default Layout;
