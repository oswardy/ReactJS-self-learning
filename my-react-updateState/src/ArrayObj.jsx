import {useState} from 'react'

export default function ArrayObj(){
    return<>
        <CarArray />
        <CarArrObj />
    </>
}


function CarArray(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState('');
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function carAdd(){
        const newCars = {id: Date.now(),
                        year:carYear,
                        make:carMake,
                        model:carModel
        };
        setCars([...cars, newCars]);
        setCarYear('');
        setCarMake('');
        setCarModel('');
    }

    function carDelete(carId){
        setCars(cars.filter(c=> c.id !== carId));
    }

    function carYearChange(event){
        setCarYear(event.target.value)
    }
    function carMakeChange(event){
        setCarMake(event.target.value)
    }
    function carModelChange(event){
        setCarModel(event.target.value)
    }

    return(<>
        <h2 style={{marginTop:'20px'}}>Multiple state array object car</h2>
        <ul>
            {cars.map(car =><li key={car.id}> 
                                    {car.year} {car.make} {car.model} {''} &nbsp;
                                    <button onClick={() =>carDelete(car.id)}>Delete</button>
                                    </li>)}
        </ul>
        <input value={carYear} type="number" onChange={carYearChange} placeholder='year of car'></input>
        <input value={carMake} type="text" onChange={carMakeChange} placeholder='make of car'></input>
        <input value={carModel} type="text" onChange={carModelChange} placeholder='model of car'></input>
        <button onClick={carAdd}>Add car</button>
    </>)
}

function CarArrObj(){
    const [hiCars, setHiCars] = useState([]);

    const [newCar, setNewCar] = useState({year:'',make:'',model:''})

    function hiCarsAdd(){

        setHiCars([...hiCars, {id: Date.now(), ...newCar}]);
        setNewCar({year:'',make:'',model:''}) //reset
    }

    function hiCarsDelete(id){
        setHiCars(hiCars.filter( c => c.id !== id));
    }

    return(<>
        <h2 style={{marginTop:'20px'}}>Lesser state array object car</h2>
        <ul>
            {hiCars.map(hiCar=> <li key={hiCar.id}>
                                        {hiCar.year} {hiCar.make} {hiCar.model} {''} &nbsp;
                                        <button onClick={() => hiCarsDelete(hiCar.id)}>Delete</button>
                                        </li>)}
        </ul>
        <input value={newCar.year} onChange={e=> setNewCar({...newCar,year: e.target.value})} type="number" placeholder='year of car'></input>
        <input value={newCar.make} onChange={e=> setNewCar({...newCar,make: e.target.value})} type="text" placeholder='make of car'></input>
        <input value={newCar.model} onChange={e=> setNewCar({...newCar,model: e.target.value})} type="text" placeholder='model of car'></input>
        <button onClick={hiCarsAdd}>Add car</button>

    </>)
}