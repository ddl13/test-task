import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ViewPage.scss";
import View from "../components/View";
import AppService from "../AppService";

const ViewPage = () => {
  const [note, setNote] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleNote(id);
    }
  }, [id]);

  const getSingleNote = async (id) => {
    try {
      const singleNote = await AppService.getSingleNote(id);
      setNote({ ...singleNote });
    } catch (error) {
      throw new Error(error.response.data);
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
