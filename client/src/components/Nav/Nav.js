import React from "react";

const styles = {
  navbarStyle: {
    background: "gray",
    justifyContent: "flex-end",
   color: "white"
  }
};

const Nav = () => (
  <nav style={styles.navbarStyle} className="navbar">
    <a className="navbar-brand" style={styles.navbarStyle} href="/">
       Home
    </a>
    <a className="navbar-brand" style={styles.navbarStyle} href="/games/10">
       Play Game
    </a>
    {/* <a className="navbar-brand" style={styles.navbarStyle} href="/injuries">
      Injuries
    </a> */}
    <a className="navbar-brand" style={styles.navbarStyle} href="/news">
      News
    </a>
  </nav>
);

export default Nav;
