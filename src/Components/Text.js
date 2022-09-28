import React from "react";

function Text({
  style,
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
            
          
            (style === "input" && selectedLang === 'en')? "Enter English word or phrase..." :
            (style === "input" && selectedLang === 'fr') ? 'Saisir un mot ou une phrase en Français... ': 
            "Translation/Traduction" }
            //  (style === 'output' && selectedLang === 'fr') ?
            //  style === "input" ? selectedLang === 'en'? "Enter English word or phrase..." : 
            // style === "input" ? selectedLang === 'fr'? "Saisir mot ou phrase en Français..." : 
            // style === 'output'? selectedLang === 'en'? "Translation" :
            // style === 'output' ? selectedLang === 'fr'? "Traduction":"null" }


        disabled={style === "output"}
        onClick={clearText}
        onChange={(e) => {
          console.log("this is input translation", textToTranslate);

          setTextToTranslate(e.target.value);
        }}
        value={style === "input" ? textToTranslate : translation}
      ></textarea>
    </div>
  );
}

export default Text;
