import React from "react";
import "./App.css";

const Layout = ({ title, nav1, nav2, nav3 }) => {
  return (
    <div>
      <header>
        <h4>{title}</h4>
        <nav>
          <a href="/">{nav1}</a>
          <a href="/">{nav2}</a>
          <a href="/">{nav3}</a>
        </nav>
      </header>
    </div>
  );
};

export default Layout;