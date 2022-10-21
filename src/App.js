import React from "react";
import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Words from "./Pages/Words";
import Phrases from "./Pages/Phrases";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import useFetch from "./CustomHooks.js/UseFetch";

function App() {

  const [selectedLang, setSelectedLang] = useState("en");
  const [translatedLang, setTranslatedLang] = useState("fr");
  const [translationObject, setTranslationObject] = useState({
    en: "",
    fr: "",
    type: "",
  });


  // focus of project is more on translation form than display of json data

  const fetch = useFetch;

  const getTranslationFn = () => {

    const textToTranslate = translationObject[selectedLang]

    fetch(
      "getTranslation",
      {
        textToTranslate,
        selectedLang,
        translatedLang,
        translationObject,
        setTranslationObject
        
      },

      setTranslationObject

    );
  };


  const changeLang = () => {
    setSelectedLang(translatedLang);
    setTranslatedLang(selectedLang);
    clearText();
    console.log("trans", translatedLang, "select", selectedLang);
  };

  const clearText = () => {
    setTranslationObject({...translationObject,en: "", fr: ""})

  };

  return (
    <HashRouter>
      <Header />
      <Nav />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              setTranslationObject={setTranslationObject}
              translationObject={translationObject}
              getTranslationFn={getTranslationFn}

              invertLang={translatedLang}
              selectedLang={selectedLang}
              clearText={clearText}
              changeLang={changeLang}
            />
          }
        />
        <Route exact path="/words" element={<Words />} />
        <Route exact path="/phrases" element={<Phrases />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
