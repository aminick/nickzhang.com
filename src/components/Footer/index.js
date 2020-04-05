import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <div className="container">
          {/* <UserLinks config={config} labeled /> */}
          <div className="notice-container">
            <h6>{copyright}</h6>

            {/* <Link to={url}>
            <button>Subscribe</button>
          </Link> */}
            {/* <h4>
            Based on{" "}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>
            .
          </h4> */}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
