import React from 'react'
import PhraseEntry from '../Components/PhraseEntry'
import {useState, useEffect} from 'react'

const Phrases = () => {
const [phraseState, setPhraseState] = useState([])

useEffect(() => {
  fetch(process.env.REACT_APP_DATABASE)
  .then((r) => r.json())
  .then((phrase) => setPhraseState(phrase))
  .catch(err => console.log('This is the error message', err))
    
}, [])

console.log("this is phraseState", phraseState)

const phraseFiltered = phraseState.filter(entry => entry.type === 'Phrase')

const phraseMap = phraseFiltered.map((entry) => {
  return (<PhraseEntry french={entry.fr.toLowerCase()} english={entry.en.toLowerCase()} id={entry.id}/>)
  
})

return (
  <div className="wordcontainer">
    <div className='phraseMap' >{phraseMap}</div>
  </div>

)
}
  
  export default Phrases
  