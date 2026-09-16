import {useState, useContext} from 'react'
import {UserContext} from './ContextA.jsx'

export default function ContextD(){
    const {userName} = useContext(UserContext);
    return(
        <div className='box'>
            <h1>Component D - oh {userName}</h1>
        </div>
    )
}