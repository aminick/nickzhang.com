import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isSticky = () => {
      setIsActive(false);
      if (window.scrollY > 15) {
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

  const handleBurgerClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <nav
      className={`navbar ${sticky ? "sticky" : ""} ${
        isActive ? "is-active" : ""
      }`}
    >
      <div className="container">
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/">
              <h3 className="subtitle-custom">NZ</h3>
            </Link>
          </div>

          <div className="navbar-burger" onClick={handleBurgerClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-menu">
          <Link className="button" to="/" activeClassName="active">
            Home
          </Link>
          <Link className="button" to="/blog" activeClassName="active">
            Blog
          </Link>
          <Link className="button" to="/about-me" activeClassName="active">
            About me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
