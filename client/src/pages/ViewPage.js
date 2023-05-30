import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ViewPage.scss";

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
      <div className="card">
        <div className="card__header">
          <p>Employee info</p>
        </div>
        <div className="card__wrapper">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{user && user.name}</span>
          <br />
          <br />
          <strong>Age: </strong>
          <span>{user && user.age}</span>
          <br />
          <br />
          <strong>Position: </strong>
          <span>{user && user.position}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
