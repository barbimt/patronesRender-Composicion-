import React, { useState } from "react";

//recibimos el wrappedcomponent
const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };
    return (
      <>
        <WrappedComponent show={storageChange} toggleShow={toggleShow} />
      </>
    );
  };
};

export default withStorageListener;
