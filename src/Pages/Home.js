import React from "react";
import Text from "../Components/Text.js";
import Buttons from "../Components/Buttons.js";
import SwitchLang from "../Components/SwitchLang";

const Home = ({
  textToTranslate,
  getTranslationFn,
  translation,
  selectedLang,
  changeLang,
  invertLang,
  clearText,
  setTranslationObject,
  translationObject,
}) => {
  return (
    <div className="App">
      <div className="text-parent">
        <Text
          id="input"
          translationObject={translationObject}
          setTranslationObject={setTranslationObject}
          selectedLang={selectedLang}
          clearText={clearText}
         
        />
        <SwitchLang changeLang={changeLang} />
        <Text id="output" translationObject={translationObject}
          setTranslationObject={setTranslationObject}
          selectedLang={invertLang}
          clearText={clearText} />
      </div>
      <div>
        <Buttons
          translationObject={translationObject}
          textToTranslate={textToTranslate}
          translation={translation}
          getTranslationFn={getTranslationFn}
        />
      </div>
    </div>
  );
};

export default Home;
