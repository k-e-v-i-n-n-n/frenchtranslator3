import React from "react";

const WordEntry = ({ french, english, id }) => {
  const handleDelete = (e) => {
    e.target.parentNode.remove();

    fetch(`${process.env.REACT_APP_FETCH}/${id}`, {
      
    method: "DELETE"
    })
  };

  return (
    <div className="wordcard">
      <div>
        <p className="saved">
          {french} • {english}
        </p>
      </div>
      <button className="deletebutton" onClick={handleDelete}>x</button>
    </div>
  );
};

export default WordEntry;
