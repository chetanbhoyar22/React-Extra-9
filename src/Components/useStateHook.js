import React from "react";          //default imported
import {useState} from "react";     //named imported

function useStateHook(){ 

    const [name, setName] = useState("Sham");
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({name: "Sahir", age:25})

    // Returns a state variable and a function using which you can update the state value. because we do not have setState function in functional components, also it will take the initial value of the state variable.

    // Named function - variable whose value is equal to a function
    // const updateState = function(){
    //   setName("John");
    // }

    // Arrow function 
    const updateState = () => {
        setName("Doe");
    }

    const updateObjState = () => {
        setUser(prevState => {
            return({
                ...prevState,
                name : "Aman",
                age : 24
            })
        })
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>HOOKS </h1>
            <h2>useState</h2>
            <p>State variable name : <b>{name}</b></p>

            <button onClick={updateState}>Click to update the state variable</button>
            <br/><br/>

            <button onClick={()=>setName("Samar")}>Click to update the state variable using arrow function</button>

            <p>State count variable <b>{count}</b></p>

            <button onClick={()=>setCount(prevState=>prevState+1)}>Update the state count variable by using prev state</button>

            <p>State as an object - <b>{user.name}</b></p>
            <p>State as an object - <b>{user.age}</b></p>

            <button onClick={updateObjState}>Click to update object state variable value</button>
        
        </div>
    )
}
export default useStateHook;

// useState - 25-04-2022
// definition & structure.
// how to use the state variable in dom.
// update the state variable -> by creating a separate function and by writing in the same line.
// prevState concept.
// This prevState is required when you want to use the initial value when you are updating the new state variable value.