import React from 'react'
import Nav from "../Components/Nav.js"
import Header from "../Components/Header.js";
import Text from "../Components/Text.js";
import Buttons from "../Components/Buttons.js";

const Home = ( {textToTranslate, setTextToTranslate, setTranslation, getTranslation, translation}) => {
  return (
    <div className="App">

      <div className="text-parent">
        <Text
          style="input"
          textToTranslate={textToTranslate}
          setTextToTranslate={setTextToTranslate}
          setTranslation={setTranslation}
        />
        <Text style="output" translation={translation} />
      </div>
      <div onClick={getTranslation}>
        <Buttons />
      </div>
    </div>
  );
};

export default Home
