import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./View.scss";

const View = ({ user, id }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="card">
      <div className="card__header">
        <p>{t("noteInfo")}</p>
      </div>
      <div className="card__wrapper">
        <strong>ID: </strong>
        <span>{id}</span>
        <br />
        <br />

        <strong>{t("time")}: </strong>
        <span>{user && user.time}</span>
        <br />
        <br />
        <strong>{t("note")}: </strong>
        <span>{user && user.note}</span>
        <br />
        <br />
        <Link to="/">
          <button className="btn btn-edit">{t("goBack")}</button>
        </Link>
      </div>
    </div>
  );
};

export default View;