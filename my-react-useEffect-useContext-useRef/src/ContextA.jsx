import {useState, useRef, useEffect, createContext} from 'react'
import ContextB from './ContextB.jsx';

export const UserContext = createContext();

export default function ContextA(){
    const [userName, setUserName] = useState("osward");
    const inputRef = useRef('');

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'cyan';
    }
    

    return(
        <div className='box'>
            <h1>Component A - hi {userName}</h1>
            <button className='focus-btn' onClick={handleClick}>Focus</button>
            {/* <input ref={inputRef}></input> */}
            <UserContext value={{userName,inputRef}}>
                <ContextB user={userName} />
            </UserContext>
            
        </div>
    )
}