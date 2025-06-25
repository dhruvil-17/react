import React , {useState} from 'react';
function updateArray() {
  
  const[fruits , setFruit]= useState(["Apple" , "Orange" , "Banana"]);


  function Add() {
    const temp=document.getElementById('newFood').value;    
    document.getElementById('newFood').value="";
    setFruit(f => [...f , temp])
  }
  function Remove(index) {
    setFruit()
  }

  return(<>
    <div>
      <ul>
        {fruits.map((fruit , index)=> <li key={index}>{fruit}</li> )}
      </ul>
      <input type="text" placeholder='Add your fruit' id='newFood' />
      <button onClick={Add}>Add</button>
      <br />
      <input type="number" placeholder='Add your id' id='removeId' />
      <button onClick={Remove}>Add</button>

    </div>
  
  </>)
}

export default updateArray