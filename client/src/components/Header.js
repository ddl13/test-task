import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [activeTab, setActiceTab] = useState("Home");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiceTab("Home");
    } else if (location.pathname === "/add") {
      setActiceTab("AddUser");
    }
  }, [location]);

  return (
    <div className="header">
      <p className="logo">Employees manager system</p>
      <div className="header-right">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiceTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddUser" ? "active" : ""}`}
            onClick={() => setActiceTab("AddUser")}
          >
            Add User
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;