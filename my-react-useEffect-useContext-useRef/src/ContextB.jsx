import {useState} from 'react'
import ContextC from './ContextC.jsx';

export default function ContextB(){

    return(
        <div className='box'>
            <h1>Component B</h1>
            <ContextC />
        </div>
    )
}