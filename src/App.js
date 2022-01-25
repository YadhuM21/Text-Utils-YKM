// import logo from "./logo.svg";
import React, { useState } from 'react'
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [btnName, setBtnName] = useState('Enable Dark Mode')

  const toggleMode=() => {
    handleDarkMode();
    if (mode === "dark") {
      setMode("light");
      setBtnName("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
    } else {
      setMode("dark");
      setBtnName("Turn Off Dark Mode");
      document.body.style.backgroundColor = '#042743';
    }
  }

  const handleDarkMode = () => {
    if (darkObj.color === "black") {
      setdarkObj({
        color: "white",
        backgroundColor: "black",
        border: "0.5px solid #0b1eac",
      });
    } else {
      setdarkObj({
        color: "black",
        backgroundColor: "white",
      });
    }
  };
  const [darkObj, setdarkObj] = useState({
    color: "black",
    backgroundColor: "white",
  });

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} btnName={btnName}></Navbar>

      <div className="container my-3">
      <Switch>

          <Route path="/about">
            <About darkObj={darkObj}/>
          </Route>

          <Route path="/">
          <TextForm heading="Enter the Text to Analyze" mode={mode}/>
          </Route>

        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
