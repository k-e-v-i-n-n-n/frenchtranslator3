import React from 'react'
import PhraseEntry from '../Components/PhraseEntry'
import {useState, useEffect} from 'react'


const Phrases = () => {
   
const [phraseState, setPhraseState] = useState([])



useEffect(() => {
  fetch("http://localhost:3001/words_n_phrases")
  .then((r) => r.json())
  .then((phrase) => setPhraseState(phrase))
  .catch(err => console.log('This is the error message', err))
    
}, [])

console.log("this is phraseState", phraseState)

const phraseFiltered = phraseState.filter(entry => entry.Type === 'Phrase')


const phraseMap = phraseFiltered.map((entry) => {
  return (<PhraseEntry french={entry.French.toLowerCase()} english={entry.English.toLowerCase()} id={entry.id}/>)
  
})

return (
  <div className="wordcontainer">
    <div className='phraseMap' >{phraseMap}</div>
  </div>

)
}
  
  export default Phrases
  