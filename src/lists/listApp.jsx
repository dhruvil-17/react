import List from './lists/PropList'
import Students from './Student/Student'

function App() {
  const fruits=[
       {id: 1,name : "Apple" , calories : 95},
       {id: 2,name : "orange" , calories : 45},
       {id: 3,name : "banana" , calories : 105},
       {id: 4,name : "coconut" , calories : 159},
       {id: 5,name : "pineapple" , calories : 37},
  ];
  const vegetables=[
      {id: 1,name : "brinjal" , calories : 110},
      {id: 2,name : "potato" , calories : 23},
      {id: 3,name : "tomato" , calories : 55},
      {id: 4,name : "carrot" , calories : 72},
      {id: 5,name : "broccoli" , calories : 89},
];
  return (
    <> 
       {/* {fruits.length > 0 ? <List type={fruits} category="Fruits"/> : null}
       {vegetables.length>0 ? <List type={vegetables} category="vegetables"/> : <h3>No veggies Available</h3>} */}

       {/* or */}
       
       {fruits.length > 0 && <List type={fruits} category="Fruits"/>}
       {vegetables.length >0 && <List type={vegetables} category="vegetables"/> }
       
    </>
  );
}

export default App
