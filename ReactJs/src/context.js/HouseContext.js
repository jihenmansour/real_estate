import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const HouseContext = createContext({
    items: {},
    setItems() {},
  });;

export const HouseContextProvider = ({children}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api-state/house.php').then(response => {
            setItems(response.data);
        })
    }, []);


    const value = {
        items,
        setItems,
    }


    return (<HouseContext.Provider value={value}>{children}</HouseContext.Provider>)
};

