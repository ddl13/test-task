import React from "react";
import { useTranslation } from "react-i18next";
import "./Form.scss";

const Form = ({ state, submitForm, changeForm, id }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <form className="form" onSubmit={submitForm}>
        <label htmlFor="name">{t("name")}</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={t("namePlacehoder")}
          onChange={changeForm}
          value={state.name}
        />
        <label htmlFor="salary">{t("salary")}</label>
        <input
          type="number"
          id="salary"
          name="salary"
          placeholder={t("salaryPlacehoder")}
          onChange={changeForm}
          value={state.salary}
        />
        <label htmlFor="position">{t("position")}</label>
        <input
          type="text"
          id="position"
          name="position"
          placeholder={`${t("positionPlacehoder")} (Senior Developer)`}
          onChange={changeForm}
          value={state.position}
        />
        <input type="submit" value={id ? t("update") : t("add")}></input>
      </form>
    </>
  );
};

export default Form;
