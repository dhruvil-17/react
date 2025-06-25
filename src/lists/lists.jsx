function Lists() {
  const fruits=[
    {id: 1,name : "Apple" , calories : 95},
    {id: 2,name : "orange" , calories : 45},
    {id: 3,name : "banana" , calories : 105},
    {id: 4,name : "coconut" , calories : 159},
    {id: 5,name : "pineapple" , calories : 37},
  ];
  
  // fruits.sort((first,second)=>second.name.localeCompare(first.name)); alphabetical reverse order

  //fruits.sort((a,b)=>b.id-a.id); numerical sort


  const listItems=fruits.map(fruit=> 
    <li key={fruit.id}>
      {fruit.name} : <b>{fruit.calories}</b>
    </li>
  )


//   const lowCalFruits= fruits.filter(fruit => fruit.calories <= 100);

//   const listItems = lowCalFruits.map(lowCalFruit=> <li key={lowCalFruit.id}>
//     {lowCalFruit.name} : 
//     <b> {lowCalFruit.calories}</b>
//   </li>);

// const highCal= fruits.filter(fruit => fruit.calories >= 100);

// const listItems2 = highCal.map(highCals=> <li>
  
//   {highCals.name} : 
//   <b> {highCals.calories}</b>
// </li>); 
  



  return(<>
  
  <ol>{listItems}</ol>

  </>);
}

export default Lists