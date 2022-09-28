import React from "react"
import { useState} from "react"
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
  const [selectedLang, setSelectedLang] = useState('en')
  const [translatedLang, setTranslatedLang] =useState('fr')

  const getTranslation = async () => {
    const data = { textToTranslate, selectedLang, translatedLang };
    const response = await axios.get("http://localhost:8000/translate", {
      params: data,
    });
    console.log("response from front", response);
    setTranslation(response.data);
    
  };

  const invertLang = () =>{

    setSelectedLang(translatedLang)
    setTranslatedLang(selectedLang)
    clearText()

  }

  const clearText = () => {

    setTextToTranslate('')
    setTranslation('')

  }



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
          invertLang={invertLang}
          selectedLang={selectedLang}
          clearText={clearText}
          
          />} />
        <Route exact path="/words" element={<Words/>} />
        <Route exact path="/phrases" element={<Phrases />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
