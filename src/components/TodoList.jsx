import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector( (state) => state.todos );
    const dispatch = useDispatch();
    return (<>
        <h2>Todo List</h2>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                  {todo.text}
                  <button onClick={() => dispatch(removeTodo(todo.id))}>Delete Todo</button> 
                </li>
                //removetodo reducer is used in button
            ))}
        </ul>
    </>)
}

export default Todos;