import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList-container">
      {/* cuando reciba props.error -> cuando mi componente tenga un error y sea true, entonces voy a querer renderizar todo lo que venga en mis propiedades en la función -> render prop onError() -> tenemos q llamarlo con () porque es una función  
    necesitamos recibir la props.error para poder hacer la verificacion de si debemos renderizar lo q venga en nuestra prop onError*/}
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {/*Tenemos q verificar si nuestro componente no está cargando, pero tampoco hay resultados de los todo*/}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {/* utilizando la funcion render, hacemos una iteracion, dentro vamos a tener nuestro todo y dentro de este vamos a enviarle a nuestra props.render(todo) */}
      {props.searchedTodos.map((todo) => props.render(todo))}

      {(!!props.totalTodos &&  !props.searchedTodos.length) && props.onEmptyTodosSearchResults(props.searchText)}
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
