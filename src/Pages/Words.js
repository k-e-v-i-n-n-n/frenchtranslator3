import React from "react"
import { useState, useEffect } from "react"

import WordEntry from "../Components/WordEntry"

const Words = () => {

const [dataState, setDataState] = useState([])



  useEffect(() => {
    fetch("http://localhost:3001/words_n_phrases")
    .then((r) => r.json())
    .then((data) => setDataState(data))
    .catch(err => console.log('This is the error message', err))
      
  }, [])

  console.log("this is dataState", dataState)

  const dataFiltered = dataState.filter(entry => entry.Type === 'Word')


  const dataMap = dataFiltered.map((entry) => {
    return (<WordEntry french={entry.French.toLowerCase()} english={entry.English.toLowerCase()} id={entry.id}/>)
    
  })

  return (
    <div className="wordcontainer">
      <div className='dataMap'>{dataMap}</div>
    </div>
 
  )
}

export default Words;
