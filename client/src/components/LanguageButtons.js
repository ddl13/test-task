import React from "react";
import "./LanguageButtons.scss";

const LanguageButtons = (props) => {
  return (
    <div className={`btns ${props.className}`}>
      <button>Eng</button>
      <button>Ukr</button>
    </div>
  );
};

export default LanguageButtons;
