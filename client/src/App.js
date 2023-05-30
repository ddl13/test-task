import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import HomePage from "./pages/HomePage";
import EditSection from "./pages/EditSection";
import ViewPage from "./pages/ViewPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/add" element={<EditSection />} />
          <Route path="/update/:id" element={<EditSection />} />
          <Route path="/view/:id" element={<ViewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
