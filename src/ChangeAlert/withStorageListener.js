import React, { useState } from "react";

//recibimos el wrappedcomponent
const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    // retornamos elemento de react  -> utilizamos ese wrapped component aca
    // vamos a darle a este WrappedComponent una propiedad especial con la q podamos notificarle de si hubo cambios en otra pestaña o ventana del navegador
    // vamos a enviarla la prop withStorageListener a nuestro wrappedcomponent
//tenemos q recibir esas props del WrappedComponent en nuestro wrappedcompnent -> nos vamos al componente index.js de changeAlert y ahi recibimos las dos props q estamos inyectando desde el HOC
    return (
      <>
        <WrappedComponent 
        show={storageChange}
        toggleShow={setStorageChange} />;
      </>
    );
  };
};

export default withStorageListener;
