import React, { useContext, useState } from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

function App() {
  const [state, setState] = useState("estado compartido desde APP");

  return (
    <>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </>
  );
}

function TodoHeader({ children }) {
  //le mandamos la prop children para q se rendericen los componentes q queremos q vayan dentro
  return (
    <>
      <header>{children}</header>
    </>
  );
}

function TodoList({ children }) {
  //llamamos a la propiedad children de nuestro componente 
  return <section className="TodoList-container">{children}</section>;
}

function TodoCounter() {
  return <p>todocounter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}

function TodoItem({state}) {
  return <p>TodoItem: {state}</p>;
}

export default App;
