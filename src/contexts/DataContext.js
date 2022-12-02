import { useContext } from "react";
import { useState, createContext } from "react";

const DataContext = createContext();

export function DataContextProvider(props) {
  const [categoriesArray, setCategoriesArray] = useState([]);

  return (
    <DataContext.Provider value={{ categoriesArray, setCategoriesArray }}>
      {props.children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
