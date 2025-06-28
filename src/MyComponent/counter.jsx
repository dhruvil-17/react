import React , {useState} from 'react';
function Counter() {
  const [count , setCount]=useState(0);

  const  IncreaseCount = ()=>{
    //setCount(count+1);
    setCount(c => c+1);
    // setCount(c => c+1); Update , used to update values after set
    // setCount(c => c+1); good practice to write first letter of previous counter
  };
  const resetCount = () => {
    setCount(0);
  };
  const DecreaseCount = () =>{
   if (count>0) {
    setCount(count=>count-1);
   }
  }

  return(<>
      <div>
        <p>Count : {count}</p>
        <button onClick={IncreaseCount}>+</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={DecreaseCount}>-</button>
      </div>
  </>);
}

export default Counter