import "./LanguageButtons.scss";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";

const LanguageButtons = (props) => {
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setActiveLanguage(language);
  };

  useEffect(() => {
    setActiveLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <div className={`btns ${props.className}`}>
      <button
        className={`eng-btn ${activeLanguage === "en" ? "active" : ""}`}
        onClick={() => {
          changeLanguage("en");
        }}
      >
        Eng
      </button>
      <button
        className={`ru-btn ${activeLanguage === "ru" ? "active" : ""}`}
        onClick={() => {
          changeLanguage("ru");
        }}
      >
        Ru
      </button>
    </div>
  );
};

export default LanguageButtons;
