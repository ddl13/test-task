import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditSection.scss";
import { toast } from "react-toastify";
import Form from "../components/Form";

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
    const response = await axios.get(`http://localhost:5000/note/${id}`);
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  const addNote = async (data) => {
    const response = await axios.post("http://localhost:5000/note", data);

    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateNote = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/note/${id}`, data);

    if (response.status === 200) {
      toast.success(response.data);
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
