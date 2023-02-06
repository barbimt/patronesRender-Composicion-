import React from "react";
import withStorageListener from "./withStorageListener";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <>
        <p>Hubo cambios!</p>
      </>
    );
  }
  return <p>changelert</p>;
}
//queremos importar el change alert con el evento del storage ->
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
