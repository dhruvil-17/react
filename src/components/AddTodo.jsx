import React , {useState} from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function AddTodo() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText("");
    }
    return(<>
    
      <form onSubmit={addTodoHandler}>

        <input type="text" placeholder="Enter a Todo" value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    
    </>)
    
}
export default AddTodo;