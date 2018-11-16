import React from "react";
// import { url } from "inspector";

const Background = '../images/fantasydata.png';

const styles = {
  navbarStyle: {
    background: "gray",
    justifyContent: "space-between",
    color: "white"
  },
  logoStyle: {
    backgroundImage: `url(${Background})`,
  }

};



const Nav = () => (
  <nav style={styles.navbarStyle} className="navbar">
    <img src='../images/fantasydata.png' height='90px' style={{ float: 'left' }} />
    <div>
      <a className="navbar-brand" style={styles.navbarStyle} href="/">
        Home
    </a>
      <a className="navbar-brand" style={styles.navbarStyle} href="/news">
        News
    </a>
      <a className="navbar-brand" style={styles.navbarStyle} href="/games/11">
        Play Game
    </a>
      {/* <a className="navbar-brand" style={styles.navbarStyle} href="/injuries">
      Injuries
    </a> */}
    </div>
  </nav>
);

export default Nav;
