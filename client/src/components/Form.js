import React from "react";
import { useTranslation } from "react-i18next";
import "./Form.scss";

const Form = ({ state, submitForm, changeForm, id }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <form className="form" onSubmit={submitForm}>
        <label htmlFor="time">{t("time")}</label>
        <input
          type="date"
          id="time"
          name="time"
          onChange={changeForm}
          value={state.time}
        />
        <label htmlFor="note">{t("note")}</label>
        <input
          type="text"
          id="note"
          name="note"
          placeholder={t("notePlacehoder")}
          onChange={changeForm}
          value={state.position}
        />
        <input type="submit" value={id ? t("update") : t("add")}></input>
      </form>
    </>
  );
};

export default Form;
