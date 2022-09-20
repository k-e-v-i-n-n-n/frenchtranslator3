import React from 'react'
import {NavLink} from 'react-router-dom'


function Nav(){


    return(

        <div className='nav'>
            <NavLink exact to='/' className='nav-items'>Translate</NavLink>
            <NavLink to='words' className='nav-items'>Words</NavLink>
            <NavLink to='phrases' className='nav-items'>Phrases</NavLink>



        </div>
    )
}

export default Nav