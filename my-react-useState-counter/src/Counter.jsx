import React, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0);

    const incrementNumber = ()=>{
        setCount(c => c +1);
    }

    const decrementNumber = ()=>{
        setCount(c => c-1);
    }

    const resetNumber = ()=>{
        setCount(0);
    }

    return(
        <div className="counter-container">
            <h3 className="counter-number">{count}</h3>
            <button className="counter-button" onClick={incrementNumber}>Increase</button>
            <button className="counter-button" onClick={decrementNumber}>Decrease</button>
            <button className="counter-button" onClick={resetNumber}>Reset</button>
        </div>
    );
}

export default Counter