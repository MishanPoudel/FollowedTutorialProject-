import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <TextForm heading="Enter The Text To Analyze Below"/>
    {/* <About/> */}
    </>
  );
}

export default App;
