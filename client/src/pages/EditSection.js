import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditSection.scss";
import { toast } from "react-toastify";
import Form from "../components/Form";
import AppService from "../AppService";

const initialState = {
  time: "",
  note: "",
};

const EditSection = () => {
  const [state, setState] = useState(initialState);

  const { time, note } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleNote(id);
    }
  }, [id]);

  const getSingleNote = async (id) => {
    try {
      const singleNote = await AppService.getSingleNote(id);
      setState({ ...singleNote });
    } catch (error) {
      throw new Error(error.response.data);
    }
  };

  const addNote = async (data) => {
    try {
      const response = await AppService.addNote(data);
      toast.success(response);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateNote = async (data, id) => {
    try {
      const response = await AppService.updateNote(data, id);
      toast.success(response);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!time.trim() || !note.trim()) {
      return toast.error("Please don`t left fields empty");
    }

    if (!id) {
      addNote(state);
    } else {
      updateNote(state, id);
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
