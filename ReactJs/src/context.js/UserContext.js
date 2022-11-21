import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({
    items: {},
    setItems() {},
  });;

  export default function UserContextProvider({ children }) {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState([]);
    const [path, setPath] = useState('');
  
    useEffect(() => {
      async function getSingleItemData() {
        const result = await axios(`http://localhost:8080/api-state/user.php/${path}`);
        setItem(result.data);
      }
      if(path) getSingleItemData();
    }, [path]);
  
    return (
      <UserContext.Provider value={{ items, item, setPath, setItem }}>
        {children}
      </UserContext.Provider>
    );
  }

