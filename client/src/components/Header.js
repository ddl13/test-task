import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

import LanguageButtons from "./LanguageButtons";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [activeTab, setActiceTab] = useState("Home");

  const location = useLocation();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiceTab("Home");
    } else if (location.pathname === "/add") {
      setActiceTab("AddUser");
    }
  }, [location]);

  return (
    <div className="header">
      <LanguageButtons className="language-btns" />

      <h2 className="logo">{t("logo")}</h2>

      <div className="header__nav">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiceTab("Home")}
          >
            {t("home")}
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddUser" ? "active" : ""}`}
            onClick={() => setActiceTab("AddUser")}
          >
            {t("addingEmployee")}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
