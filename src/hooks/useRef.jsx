import { useRef , useState , useEffect, use } from "react";
//useRef is used to create mutable variables without re-rendering the component and also used to access DOM elements
export default function UseRef() {
  
  const [count , setCount] = useState(0);
  //const [renderCount , setRender] = useState(0);
  const renderCount = useRef(0);
   useEffect(()=>{
  //      setRender(prev=>prev+1) //this will render infinite times
    renderCount.current+=1;
   })
  
   const inputDOM = useRef();
   const Clicked=()=>{
    inputDOM.current.style.background='blue';
   }
  
  return(<>
    <button onClick={()=>setCount(count=>count-1)}>-1</button>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count=>count+1)}>+1</button>
    <h1>Render count {renderCount.current}</h1>

    <input type="text" ref={inputDOM} />
    <button onClick={Clicked}>Click</button>
  </>)
}