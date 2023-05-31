import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ViewPage.scss";
import View from "../components/View";

const ViewPage = () => {
  const [note, setNote] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleNote(id);
    }
  }, [id]);

  const getSingleNote = async (id) => {
    const response = await axios.get(`http://localhost:5000/note/${id}`);
    if (response.status === 200) {
      setNote({ ...response.data[0] });
    }
  };
  return (
    <div className="container">
      <div className="card"></div>
      <View note={note} id={id} />
    </div>
  );
};

export default ViewPage;
