import React from "react";

function Buttons({ textToTranslate, translation, getTranslation }) {
  const newWord = {
    id: "",
    French: translation,
    English: textToTranslate,
    Type: "Word",
  };

  console.log("new word", newWord);

  function saveWord() {
    const newWord = {
      id: "",
      French: translation,
      English: textToTranslate,
      Type: "Word",
    };

    fetch(process.env.REACT_APP_FETCH, {
      method: "POST",
      body: JSON.stringify(newWord),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const savePhrase = () => {
    const newPhrase = {
      id: "",
      French: translation,
      English: textToTranslate,
      Type: "Phrase",
    };

    fetch(process.env.REACT_APP_FETCH, {
      method: "POST",
      body: JSON.stringify(newPhrase),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="button-container">
      <button className="button-28" onClick={getTranslation}>
        Translate
      </button>
      <button className="button-28" onClick={saveWord}>
        Save Word
      </button>
      <button className="button-28" onClick={savePhrase}>
        Save Phrase
      </button>
    </div>
  );
}

export default Buttons;
