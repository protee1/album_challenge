import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {" "}
      <nav className="navbar">
        <h1>Album Challenge</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
