import React , {useState} from 'react';
function MyComponent() {
  let [name , setName]=useState("Click to set name");

  const updateName = (name2)=>{
    setName(name2);
  }

  return(<>
      <div>
        <p>Name : {name}</p>
        <button onClick={()=>updateName("Dhruvil")}>Set Name</button>
      </div>
  </>);
}

export default MyComponent