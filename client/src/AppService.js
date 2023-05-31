import axios from "axios";

const API_URL = "http://localhost:5000";

const getNotes = async () => {
  try {
    const response = await axios.get(`${API_URL}/notes`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const deleteNote = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/note/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const getSingleNote = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/note/${id}`);
    return response.data[0];
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const addNote = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/note`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

const updateNote = async (data, id) => {
  try {
    const response = await axios.put(`${API_URL}/note/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export default {
  getNotes,
  deleteNote,
  getSingleNote,
  addNote,
  updateNote,
};
