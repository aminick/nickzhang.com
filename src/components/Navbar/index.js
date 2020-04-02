import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
const Navbar = ({ theme = "mine-shaft" }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const isSticky = () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else setSticky(false);
    };

    window.addEventListener("scroll", () => {
      isSticky();
    });
    return window.removeEventListener("scroll", () => {
      isSticky();
    });
  }, []);

  return (
    <nav
      className={`navbar ${sticky ? "sticky" : ""} is-fixed-top`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <div>
            <Link to="/">
              <h1 className="title is-3 has-text-purple">N</h1>
            </Link>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="button" to="/">
                About me
              </Link>
              <Link className="button" to="/">
                Blog
              </Link>
              <Link className="button" to="/">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
