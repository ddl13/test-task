import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import axios from "axios";
import { toast } from "react-toastify";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");

    if (response.status === 200) {
      setData(response.data);
    }
  };

  const onDeleteEmployee = async (id) => {
    if (window.confirm("Are you sure that you want to fire your employee")) {
      const response = await axios.delete(`http://localhost:5000/user/${id}`);
      if (response.status === 200) {
        toast.success(response.data);
        getUsers();
      }
    }
  };

  console.log("data:", data);

  return (
    <div className="table-wrapper">
      <table className="employee-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>№.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Age</th>
            <th style={{ textAlign: "center" }}>Position</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.position}</td>
                  <td>
                    <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteEmployee(item.id)}
                    >
                      Fire
                    </button>
                    <Link to={`/view/${item.id}`}>
                      <button className="btn btn-view">More</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;