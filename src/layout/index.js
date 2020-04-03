import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/main.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Navbar />
      <div className="container">
        {children}
        <Footer config={config} />
      </div>
    </div>
  );
};

export default Layout;
