// import UseState from './hooks/useState'
// import UseEffect from './hooks/useEffect'
// import UseRef from './hooks/useRef'
// import UseContext from './hooks/UseContext'
// import { createContext } from 'react'
// import WithAuth from './HOC/WithAuth'
// import Dashboard from './HOC/Dashboard'
import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/TodoList';

//create context
//const MyContext = createContext();

function App() {
  // const name = 'Dhruvil'

  // const AuthDash = WithAuth(Dashboard);

  return (
    <>
      {/* <MyContext.Provider value={name}>
        <UseContext/>
      </MyContext.Provider>
        <AuthDash name={name}/> */}

        <h1>Redux Toolkit</h1>
        <AddTodo/>
        <Todos/>

    </>
  );
}

export default App
//export {MyContext}; // Exporting MyContext for use in other components

