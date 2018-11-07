import React from "react";

const styles = {
  navbarStyle: {
    background: "gray",
    justifyContent: "flex-end"
  }
};

const Nav = () => (
  <nav style={styles.navbarStyle} className="navbar">
    <a className="navbar-brand" href="/">
       Homepage
    </a>
  </nav>
);

export default Nav;
