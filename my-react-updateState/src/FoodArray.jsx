import{ useState} from 'react'


export default function FoodArray(){
    const [foods, setFoods] = useState(['Apple','Banana','Pineapple']);

    function handleAddFood(){
        const foodInput = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";
        setFoods(f=>[...f,foodInput]);
    }

    function handleDeleteFood(i){
        setFoods(foods.filter((_,index) => index!= i));

    }

    return(
        <div style={{marginTop: '20px'}}>
            <h2>State Array Foods</h2>
            <input type='text' id='foodInput' placeholder='Enter food name'></input>
            <button onClick={handleAddFood}>Add food</button>
            <ul>
                {foods.map((food,index)=> <li key={index} onClick={()=> handleDeleteFood(index)}>{food}</li>)}
            </ul>
        </div>
        
    )
}