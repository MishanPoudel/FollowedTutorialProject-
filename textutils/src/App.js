import { useState, useEffect } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

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
      showAlert("Dark mode has been enabled.", "Success");
    } else {
      showAlert("Light mode has been enabled.", "Success");
      setTheme("light");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null); // Reset the alert state
    }, 1500);
  };

  return (
    <>
      <Navbar title="TextUtils" toggle={handleToggle} theme={theme} />
      <Alert alert={alert} />
      <TextForm
        heading="Enter The Text To Analyze Below"
        showAlert={showAlert}
      />
    </>
  );
}

export default App;
