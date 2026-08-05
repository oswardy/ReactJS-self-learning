import React,{useState} from 'react'

function StateOnChange(){

    const [name,setName] = useState("Guest");
    const [qty, setQty] = useState(0);
    const [pay, setPay] = useState("Visa");
    const [comment, setComment] = useState();
    const [shipment, setShipment] = useState("Pick Up");

    function handleName(event){
        setName(event.target.value);
    }

    function handlePayment(event){
        setPay(event.target.value)
    }

    function handleShipment(event){
        setShipment(event.target.value)
    }

    return(
        <div>
            <input value ={name} onChange={handleName}></input>
            <p>Name:{name}</p>

            <input type="number" value ={qty} onChange ={e => setQty(e.target.value)}></input>
            <p>Quantity: {qty}</p>

            <textarea value= {comment} onChange={e => setComment(e.target.value)} 
               placeholder="Enter delivery remarks" />
            <p>Comment: {comment}</p>

            <select value = {pay} onChange={handlePayment}>
                <option value ="">Select an option</option>
                <option value ="Visa">Visa</option>
                <option value ="Mastercard">Mastercard</option>
            </select>
            <p>Payment: {pay}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipment === "Pick Up"} 
                onChange={handleShipment}></input>
                Pick up
            </label>
            <br/>
            <label>
                <input type="radio" value="Delivery" checked={shipment === "Delivery"} 
                onChange={handleShipment}></input>
                Delivery
            </label>
            <p>Shipment: {shipment}</p>
        </div>
    );
}

export default StateOnChange