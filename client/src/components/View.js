import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./View.scss";

const View = ({ note, id }) => {
  const { t } = useTranslation();
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
        <span>{note && note.time}</span>
        <br />
        <br />
        <strong>{t("note")}: </strong>
        <span>{note && note.note}</span>
        <br />
        <br />
        <Link to="/">
          <button className="btn btn-edit goBackBtn">{t("goBack")}</button>
        </Link>
      </div>
    </div>
  );
};

export default View;
