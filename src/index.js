import React from "react";
import ReactDOM from "react-dom";
// import App from './App/index.js';
import "./index.css";

function App(props) {
  return (
    // queremos personalizar el nombre y el tipo de saludo, tenemos q recibir esa informacion por medio de props
    <h1>
      {props.saludo}, {props.nombre}
    </h1>
  );
}

function withSaludo(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad(props) {
      return (
        <>
          <WrappedComponent {...props} saludo={saludo} />
          <p>estamos acompañando al WrappedComponent</p>
        </>
      );
    };
  };
}


const AppWithSaludo = withSaludo(App)("Wenas");

ReactDOM.render(
  <AppWithSaludo nombre="math" />,
  // <App saludo="buenas" nombre="math" />,
  document.getElementById("root")
);
