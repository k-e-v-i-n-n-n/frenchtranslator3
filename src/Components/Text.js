import React from "react";

function Text({
  id,
  selectedLang,
  clearText,
  translationObject,
  setTranslationObject
}) 

{

  console.log("selected lang", selectedLang)

  function updateObject(e){
    if (selectedLang === "en"){
      setTranslationObject({...translationObject, en: e.target.value })
    }

    else {
      setTranslationObject({...translationObject, fr: e.target.value })
    }

  }
 
  return (

      <form className="outer-text-area">
        
        <textarea
        className="text-area"
        placeholder={
            (id === "input" && selectedLang === 'en')? "Enter English word or phrase..." :
            (id === "input" && selectedLang === 'fr') ? 'Saisir un mot ou une phrase en Français... ': 
            "Translation/Traduction" }
        disabled={id === "output"}
        onClick={clearText}
        onChange={updateObject}
        value={translationObject[selectedLang]}
      ></textarea>
      </form>

  );
}

export default Text;
