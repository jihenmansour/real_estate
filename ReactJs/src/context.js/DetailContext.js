import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DetailContext = createContext({
    items: {},
    setItems() {},
  });;

  export default function DetailContextProvider({ children }) {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState([]);
    const [path, setPath] = useState('');
  
    useEffect(() => {
      async function getSingleItemData() {
        const result = await axios(`http://localhost:8080/api-state/house.php/${path}`);
        setItem(result.data);
      }
      if(path) getSingleItemData();
    }, [path]);
  
    return (
      <DetailContext.Provider value={{ items, item, setPath }}>
        {children}
      </DetailContext.Provider>
    );
  }

