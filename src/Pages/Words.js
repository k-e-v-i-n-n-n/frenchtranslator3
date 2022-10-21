
import React from "react"
import { useState, useEffect } from "react"
// import useFetch from "../CustomHooks.js/UseFetch"

import WordEntry from "../Components/WordEntry"

const Words = () => {

const [dataState, setDataState] = useState([])

// const fetch = useFetch


  useEffect(() => {
    fetch(process.env.REACT_APP_DATABASE)
    .then((r) => r.json())
    .then((data) => setDataState(data))
    .catch(err => console.log('This is the error message', err))
      
  }, [])

  console.log("this is dataState", dataState)

  const dataFiltered = dataState.filter(entry => entry.type === 'Word')


  const dataMap = dataFiltered.map((entry) => {
    return (<WordEntry french={entry.fr.toLowerCase()} english={entry.en.toLowerCase()} id={entry.id}/>)
    
  })

  return (
    <div className="wordcontainer">
      <div className='dataMap'>{dataMap}</div>
    </div>
 
  )
}

export default Words;