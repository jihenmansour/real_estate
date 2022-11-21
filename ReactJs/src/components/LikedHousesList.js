
import axios from "axios";
import { useState, useEffect, useContext } from "react";

import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { RiMapPinLine, RiArrowDownSLine, RiWallet3Line, RiArrowUpSLine, RiHome5Line } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { Link, useParams } from "react-router-dom";
import { HouseContext } from "../context.js/HouseContext";



export default function LikedHousesList() {

    const [items, setItems] = useState([]);
    const id = localStorage.getItem("idUser");

    useEffect(() => {
        axios.get(`http://localhost:8080/api-state/likedHouses.php/${id}`).then(response => {
            setItems(response.data);
            console.log(response.data);
        })
    }, []);
    

 
        return (
            <div>
        
          </div>
        );
    }

