import React from 'react'

function Text({style, textToTranslate, setTextToTranslate, setTranslation, translation}){

    return(

        <div className="text-parent">

        <textarea 
        className='text-area' 
        placeholder={style == "input"? "Type word or phrase..." : "Translation"}
        disabled={style=='output'} 
        onChange={(e) => {
            console.log('this is input translation', textToTranslate)
            
            setTextToTranslate(e.target.value)}}
        value={style == 'input'? textToTranslate : translation}
        
        >
        </textarea>

        </div>
    )
    
}

export default Text
