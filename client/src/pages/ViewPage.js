import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ViewPage.scss";
import View from "../components/View";

const ViewPage = () => {
  const [user, setUser] = useState(null);

  const { id } = useParams();

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
      <div className="card"></div>
      <View user={user} id={id} />
    </div>
  );
};

export default ViewPage;
