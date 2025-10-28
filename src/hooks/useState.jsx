import { useState } from "react";


function UseState() {
  
  const [color , setColor]= useState("Red");
  function toggle() {
    if (color=="Red") {
      setColor("Blue")
    }
    else{
      setColor("Red")
    }
  }
  const [count , setCount] = useState(0);
  const counter = ()=>{
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // this wont update count + 4 because each time it takes initial value from use state and does + 1 only so it will always do 0 + 1
    setCount((count)=>count+1) // this updates the value on each click and saves it the next updated will make changes to the previous saved value 
    
  }

  return(<>
     <h1>count : {count}</h1>
     <button onClick={counter} >increase</button> 
    <h1 style={{color}}>Color is {color}</h1>
    <button onClick={toggle}>change</button>
  </>)
}

export default UseState