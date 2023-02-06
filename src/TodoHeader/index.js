import React from "react";

function TodoHeader({ children, loading }) {
  //nos va a ayudar porque por dentro tiene varios métodos que nos pueden ayudar a q React.cloneElement entienda las props.children sin importar cuantos elementos vienen (en este caso es un array de children, ya que el TodoHeader tiene dentro dos hijos el TodoCounter y el TodoSearch ), cuantos componentes en nuestro props.children del TodoHeader.
  //el toarray nos va  a permitir que si le enviamos nuestros children de todoheader, no importa si viene un elemento o no viene ninguno, siempre nos va a devolver un array q por dentro tendra o no los elementos de nuetros children
  //ya que tenemos un array, podemos tratarlo como cualquier otro array de JS, podemos llamar al metodo .map y podemos iterar por cada uno de los elementos q tenemos en el array, que serian los hijos, ahora podemos llamar a react.cloneelement y clonar cada uno de estos hijos
  React.Children.toArray(children).map((child) =>
    React.cloneElement(child, { loading })
  );
  //queremos crear un elemento a partir de otro y ese otro elemento del q vamos a crear el clon va a ser nuestro props.children, vamos a crear un clon de los hijos que tengamos en TodoHeader. Le podemos enviar un segundo argumento a este metodo cloneElement, le podemos enviar un objeto con las propiedades que querramos q tenga nuestro clon. Si descomentamos en app el componente Search, rompe, resulta q react.cloneElement necesita recibir un elemento de react, un componente, pero cuando children es más de un componente, entonces tenemos un array -> nos va ayudar el React.Children
  return (
    <header>
      {React.Children 
      .toArray(children)//convertimos estos hijos del componente todoHeader en un array y por cada uno de los elementos que hay en ese array vamos a llamar a react.cloneElement y vamos a clonar ese elemento y enviarle la propiedad loading. 
      .map((child) => 
      React.cloneElement(child, { loading })
      )}
    </header>
  );
}

export default TodoHeader;
