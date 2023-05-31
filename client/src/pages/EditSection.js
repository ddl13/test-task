import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditSection.scss";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const initialState = {
  name: "",
  salary: "",
  position: "",
};

const EditSection = () => {
  const [state, setState] = useState(initialState);

  const { t, i18n } = useTranslation();

  const { name, salary, position } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleEmployee(id);
    }
  }, [id]);

  const getSingleEmployee = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  const addEmployee = async (data) => {
    const response = await axios.post("http://localhost:5000/user", data);

    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateEmployee = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/user/${id}`, data);

    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !salary.trim() || !position.trim()) {
      return toast.error("Please don`t left fields empty");
    }

    if (!id) {
      addEmployee(state);
    } else {
      updateEmployee(state, id);
    }

    navigate("/");
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">{t("name")}</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={t("namePlacehoder")}
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor="salary">{t("salary")}</label>
        <input
          type="number"
          id="salary"
          name="salary"
          placeholder={t("salaryPlacehoder")}
          onChange={handleInputChange}
          value={salary}
        />
        <label htmlFor="position">{t("position")}</label>
        <input
          type="text"
          id="position"
          name="position"
          placeholder={`${t("positionPlacehoder")} (Senior Developer)`}
          onChange={handleInputChange}
          value={position}
        />
        <input type="submit" value={id ? t("update") : t("add")}></input>
      </form>
    </div>
  );
};

export default EditSection;
