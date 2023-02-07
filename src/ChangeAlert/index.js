import React from "react";
import withStorageListener from "./withStorageListener";
import "./ChangeAlert.css"

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <>
        <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
        <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button className="button-51" onClick={()=> toggleShow(false)}> Yes!</button>
        </div>
        </div>
      </>
    );
  } else {
    return null
  }
}
//queremos importar el change alert con el evento del storage ->
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
