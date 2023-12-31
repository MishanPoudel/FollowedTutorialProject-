import { useState, useEffect } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      document.title = "TextUtils - Dark";
      showAlert("Dark mode has been enabled.", "Success");
    } else {
      showAlert("Light mode has been enabled.", "Success");
      document.title = "TextUtils - Light";
      setTheme("light");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" toggle={handleToggle} theme={theme} />
        <Alert alert={alert} />
        <Routes>
          <Route exec path="/about" element={<About />}></Route>
          <Route
            exec
            path="/"
            element={
              <TextForm
                heading="Enter The Text To Analyze Below"
                showAlert={showAlert}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
