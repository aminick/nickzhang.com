import React from "react";
import { Link } from "gatsby";
const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div>
          <Link to="/">
            <h1 className="title is-3 has-text-purple">nickzhang</h1>
          </Link>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link className="button is-charade" to="/">
              About me
            </Link>
            <Link className="button is-charade" to="/">
              Blog
            </Link>
            <Link className="button is-charade" to="/">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
