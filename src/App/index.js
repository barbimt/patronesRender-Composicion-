import React from "react";
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import TodoHeader from "../TodoHeader";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      {/* TodoList -> no vamos a renderizar todo lo q venga en su prop children, sino que vamos a darle propiedades como onError y cuando nuestro componente TodoList sepa que hay un error, entonces vamos a enviarle el componente TodosError.
    Como usamos render props vamos a devolver una función -> es muy util cuando queremos devolver, entregarle alguna propiedad especial a nuestros componentes, en este caso, la propiedad onError no es util q la enviemos el error porque tenemos el error en el componente app, pero en el futuro si vamos a necesitar mas propiedades de especificar el error y demás a nuestro componente TodosError, por ahor alo dejamos como una función.
    por dentro TodoList se va a encargar de hacer las verificaciones para renderizar uno u otro componente
    la  prop render -> me va a devolver cada uno de mis todos, voy a poder iterar
    
    Al pasarle todas las render props, ahor atenemos q maquetar el TodoList, ya q en su propiedad children no tenemos nada, solo tenemos propiedades q son render props 
    
    - Todas las variantes o propiedades como error, loading, q son para hacer validaciones se las tenemos q enviar como  propiedades a nuestro componente TodoList*/}
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export default App;
