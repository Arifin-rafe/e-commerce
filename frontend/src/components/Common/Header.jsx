import React from "react";
import TopBar from "../Layout/TopBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      {/* top bar */}
      <TopBar />
      {/* nav bar */}
      <NavBar />
      {/* cart drawer */}
    </header>
  );
};

export default Header;
