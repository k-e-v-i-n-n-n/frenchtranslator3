import React from "react";
import useFetch from "../CustomHooks.js/UseFetch";

function Buttons({ translationObject, getTranslationFn }) {

const fetch = useFetch

const saveTranslationButton = (e) => {
  translationObject.type = e.target.name
  
  fetch("saveTranslation", translationObject)

}

  return (
    <div className="button-container">
      <button className="button-28" onClick={getTranslationFn}>
        Translate
      </button>
      <button name = "Word" className="button-28" onClick={saveTranslationButton}>
        Save Word
      </button>
      <button name = "Phrase" className="button-28" onClick={saveTranslationButton}>
        Save Phrase
      </button>
    </div>
  );
}

export default Buttons;
