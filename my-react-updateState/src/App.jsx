import {useState, useReducer} from 'react'
import FoodArray from './FoodArray.jsx'
import ArrayObj from './ArrayObj.jsx'

const initialCar = {name: 'Persona', model: 'Proton', year: 2006};

function carAdvancedReducer(car,action){
  return({...car,[action.field]:action.value})
}

function carReducer(car, action){
  switch(action.type){
    case 'changed_year':
      return{...car,year: action.value}
    case 'changed_model':
      return{...car, model:action.value}
    case 'changed_name':
      return{...car, name: action.value}
  }

}

export default function App(){
  const [car, dispatch] = useReducer(carAdvancedReducer, initialCar)
  // const [car, setCar] = useState({name: 'Wira', model: 'Proton', year:2005});

  function handleCarYear(event){
    dispatch({field:'year', type: 'changed_year', value: event.target.value});
    //setCar(c => ({...c, year:event.target.value}))
  }

  function handleCarModel(event){
    dispatch({field:'model',type: 'changed_model',value: event.target.value});
    //setCar(c => ({...c, model:event.target.value}))
  }

  function handleCarName(event){
    dispatch({field:'name',type: 'changed_name',value: event.target.value});
    //setCar(c => ({...c, name:event.target.value}))
  }
  return ( 
  <>
    <h1>Normal State + Reducer: My favourite car year is {car.year} {car.model} {car.name}</h1>

    <input type='number' value={car.year} onChange={handleCarYear}></input>
    <input value={car.model} onChange={handleCarModel}></input>
    <input value={car.name} onChange={handleCarName}></input>
    <FoodArray />
    <ArrayObj />



  </>
  )
}

