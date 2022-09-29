import React from 'react'
import Text from "../Components/Text.js";
import Buttons from "../Components/Buttons.js";
import SwitchLang from "../Components/SwitchLang";

const Home = ( {textToTranslate, setTextToTranslate, setTranslation, getTranslation, translation, selectedLang, invertLang, clearText}) => {
  return (
    <div className="App">

      <div className="text-parent">
        <Text
          style={"input"}
          textToTranslate={textToTranslate}
          setTextToTranslate={setTextToTranslate}
          setTranslation={setTranslation}
          selectedLang={selectedLang}
          clearText={clearText}
        />
        <SwitchLang invertLang={invertLang} />
        <Text style={"output"} translation={translation} />
      </div>
      <div>
        <Buttons textToTranslate={textToTranslate} translation={translation} getTranslation={getTranslation}/>
      </div>
    </div>
  );
};

export default Home
