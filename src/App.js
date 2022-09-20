import React from "react"
import { useState, useEffect } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import "./index.css";
import Home from "./Pages/Home";
import Words from "./Pages/Words";
import Phrases from "./Pages/Phrases";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import axios from "axios";

function App() {
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translation, setTranslation] = useState("");


  const getTranslation = async () => {
    const data = { textToTranslate };
    const response = await axios.get("http://localhost:8000/translate", {
      params: data,
    });
    console.log("response from front", response);
    setTranslation(response.data);
  };

  return (
    <HashRouter>
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home 
          textToTranslate={textToTranslate}
          setTextToTranslate={setTextToTranslate}
          setTranslation={setTranslation}
          getTranslation={getTranslation}
          translation={translation}
          />} />
        <Route exact path="/words" component={Words} />
        <Route exact path="/phrases" component={Phrases} />
      </Routes>
    </HashRouter>
  );
}

export default App;
