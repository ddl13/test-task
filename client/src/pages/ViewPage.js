import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ViewPage.scss";
import { useTranslation } from "react-i18next";

const ViewPage = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (id) {
      getSingleEmployee(id);
    }
  }, [id]);

  const getSingleEmployee = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    if (response.status === 200) {
      setUser({ ...response.data[0] });
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card__header">
          <p>{t("employeeInfo")}</p>
        </div>
        <div className="card__wrapper">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>{t("name")}: </strong>
          <span>{user && user.name}</span>
          <br />
          <br />
          <strong>{t("salary")}: </strong>
          <span>{user && user.salary}</span>
          <br />
          <br />
          <strong>{t("Должность")}: </strong>
          <span>{user && user.position}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">{t("goBack")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
