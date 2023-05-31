import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditSection.scss";
import { toast } from "react-toastify";
import Form from "../components/Form";

const initialState = {
  name: "",
  salary: "",
  position: "",
};

const EditSection = () => {
  const [state, setState] = useState(initialState);

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
      <Form
        submitForm={handleSubmit}
        changeForm={handleInputChange}
        state={state}
        id={id}
      />
    </div>
  );
};

export default EditSection;
