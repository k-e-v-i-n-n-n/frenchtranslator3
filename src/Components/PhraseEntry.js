import React from "react";

const PhraseEntry = ({ french, english, id }) => {
  const handleDelete = (e) => {
    e.target.parentNode.remove();
    fetch(`${process.env.REACT_APP_FETCH}/${id}`, {
      
      method: "DELETE"
      })
  };

  return (
    <div className="phrasecard">
      <div>
        <p className="saved">
          {french} • {english}
        </p>
      </div>
      <button className="deletebuttonPhrases" onClick={handleDelete}>x</button>
    </div>
  );
};

export default PhraseEntry;