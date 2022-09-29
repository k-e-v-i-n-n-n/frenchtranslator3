import React from "react";

function Text({
  id,
  textToTranslate,
  setTextToTranslate,
  translation,
  selectedLang,
  clearText
}) {
  return (
    <div className="outer-text-area">
      <textarea
        className="text-area"
        placeholder={
            // selectedLang === "en" ? "Type word or phrase..." : "Translation"}
            
          
            (id === "input" && selectedLang === 'en')? "Enter English word or phrase..." :
            (id === "input" && selectedLang === 'fr') ? 'Saisir un mot ou une phrase en Français... ': 
            "Translation/Traduction" }
            //  (id === 'output' && selectedLang === 'fr') ?
            //  id === "input" ? selectedLang === 'en'? "Enter English word or phrase..." : 
            // id === "input" ? selectedLang === 'fr'? "Saisir mot ou phrase en Français..." : 
            // id === 'output'? selectedLang === 'en'? "Translation" :
            // id === 'output' ? selectedLang === 'fr'? "Traduction":"null" }


        disabled={id === "output"}
        onClick={clearText}
        onChange={(e) => {
          console.log("this is input translation", textToTranslate);

          setTextToTranslate(e.target.value);
        }}
        value={id === "input" ? textToTranslate : translation}
      ></textarea>
    </div>
  );
}

export default Text;
