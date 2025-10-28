import React , { useContext } from "react";
import {MyContext} from '../App'; // Assuming MyContext is exported from a separate file


export default function UseContext() {
  const name = useContext(MyContext);
  
  return (
    <div>
      <h1>UseContext Hook</h1>
      <p>Context Value: {name}</p>
    </div>
  );
}