import React, {useState} from 'react'

function TestState(){

    const [name,setName] = useState("Bro");
    const [age,setAge] = useState(1);
    const [isStudent,setIsStudent] = useState(false);

    const updateName = ()=> {
        setName("Spongebob");
    }

    const updateAge = ()=> {
        setAge(age+ 1);
    }

    const updateStudent = ()=>{
        setIsStudent(!isStudent);
    }
    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Change Name</button>

                <p>Age: {age}</p>
                <button onClick={updateAge}>Increment Age</button>

                <p>Student: {isStudent ? "True" : "False"}</p>
                <button onClick={updateStudent}>Check Student Status</button>
            </div>
    );
}

export default TestState