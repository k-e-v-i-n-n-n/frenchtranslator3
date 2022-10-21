import React, {useState, useEffect} from "react";
import axios from "axios";

const useFetch = (type, objectReceived = null, setterFunction = null) => {


  const fetchObject = {
     getTranslation: async (objectReceived) => {
      const response = await axios.get(process.env.REACT_APP_TRANSLATE, {
        params: objectReceived,
      });
      console.log("response from front", response);
      setterFunction({...objectReceived.translationObject, [objectReceived.translatedLang]: response.data})
    },

    saveTranslation: (object) => {
      fetch(process.env.REACT_APP_DATABASE, {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },

    getSavedTranslations: () => {
      fetch(process.env.REACT_APP_DATABASE)
        .then((r) => r.json())
        .then((data) => {
          console.log("this is saved translations", data)
      })
        .catch((err) => console.log("This is the error message", err))
      }
  }

if (setterFunction === null || type == "getTranslation"){
fetchObject[type](objectReceived)
}

else {

    setterFunction(fetchObject[type](objectReceived))
}
};

export default useFetch;
