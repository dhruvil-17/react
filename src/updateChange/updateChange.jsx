import React , {useState} from 'react';

function updateObject() {
  
  const [car , setCar] = useState({
    year : 2024,
    company : "Ford",
    model : "Mustang"
  });

  function handleYear(e) {
    setCar(c => ({...c , year : e.target.value}))
  }
  function handleCompany(e) {
    setCar(c => ({...c , company: e.target.value}))
  }
  function handleModel(e) {
    setCar(c => ({...c , model : e.target.value}))
  }


      return(<>
      <input value={car.year} onChange={handleYear} />
      <input value={car.company} onChange={handleCompany} />
      <input value={car.model} onChange={handleModel} />
        <h1>your car is {car.year} {car.company} {car.model} </h1>
      
      </>);
}

export default updateObject