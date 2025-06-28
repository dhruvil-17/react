import React , {useState} from 'react';

function onChange() {
  
  const [name , changeName] = useState("");
  const [city , changeCity] = useState("");
  const [mode , changeMode] = useState("")
  function nameChange(e) {
    changeName(e.target.value) 
  }
  function cityChange(e) {
    changeCity(e.target.value)
  }
  function Radio(e){
    changeMode(e.target.value)
  }

  return(<>
    <div>
      <input value={name} onChange={nameChange} />
      <p>Name : {name}</p> 
    </div>
    <div>
      <select value={city} onChange={cityChange}>
        <option value="">Select City</option>
        <option value="Junagadh">Junagadh</option>
        <option value="Rajkot">Rajkot</option>
        <option value="Ahmedabad">Ahmedabad</option>
      </select>
      <p>City : {city}</p>
    </div>
    <div>
      <label>
        <input type="radio" value="Pick-Up"
        checked={mode==="Pick-Up"}
        onChange={Radio} />
        Pick-Up
      </label>
      <label>
        <input type="radio" value="Delivery"
        checked={mode==="Delivery"}
        onChange={Radio} />
        Delivery
      </label>
      <p>You selected : {mode}</p>
      
    </div>
  </>);

}

export default onChange