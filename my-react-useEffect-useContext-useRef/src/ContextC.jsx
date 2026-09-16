import {useContext} from 'react'
import { UserContext } from './ContextA.jsx';
import ContextD from './ContextD.jsx';

export default function ContextC(){
    const {inputRef} = useContext(UserContext);
    return(
        <div className='box'>
            <h1>Component C</h1>
            <input ref={inputRef}></input>
            <ContextD />
        </div>
    )
}