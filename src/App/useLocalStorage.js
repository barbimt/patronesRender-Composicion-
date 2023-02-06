import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  //este estado nos va a decir si estamos sincronizados con todas las pestañas de nuestro navegador o no 
  const [sincronizedItem, setSincronizedItem] = React.useState(true)
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true)
      } catch(error) {
        setError(error);
      }
    }, 3000);
  }, [sincronizedItem]); 
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    //disparamos dos cambios a nuetros estados
    setLoading(true); //cuando hubo cambio se ponga a cargar
    setSincronizedItem(false)

  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  };
}

export { useLocalStorage };
