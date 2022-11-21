
import axios from "axios";
import { useState, useEffect, useContext } from "react";

import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { RiMapPinLine, RiArrowDownSLine, RiWallet3Line, RiArrowUpSLine, RiHome5Line } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { Link, useParams } from "react-router-dom";
import { HouseContext } from "../context.js/HouseContext";



export default function HouseList() {

    const [isOpen, setIsOpen] = useState(false);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["country", "name"]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [filterParamType, setFilterParamType] = useState(["All"]);
    const [filterParamPrice, setFilterParamPrice] = useState(["All"]);
    const [country, setCountry] = useState(["All"]);
    const [type_house, setType] = useState(["All"]);
    const [price, setPrice] = useState(["All"]);
    const countries = ["All","Canada","United States"];
    const types = ["All","House","Apartment"];
    const prices = ["All","100000 - 130000","130000 - 160000"];
    const [images, setImages] = useState([]);

    const {items} = useContext(HouseContext);

    const {id} = useParams();
    localStorage.setItem("idUser",id);



    useEffect(() => {
        axios.get('http://localhost:8080/api-state/image.php').then(response => {
            setImages(response.data);
        })
    }, []);

    function search(items) { 
      return items.filter((item) => {
          if ((item.country == filterParam) && (item.type_house == filterParamType) && (item.price <= 130000) && (item.price >= 100000) && (price == "100000 - 130000"))  {
              return searchParam.some((newItem) => {
                  return (
                      item[newItem]
                          ? item[newItem].toString() : ''
                          .toLowerCase()
                          .indexOf(q.toLowerCase()) > -1
                  );
              });
          }
         else if ((filterParam == "All") && (item.type_house == filterParamType) && (item.price <= 130000) && (item.price >= 100000) && (price == "100000 - 130000"))  {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        ? item[newItem].toString() : ''
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        }
        else if ((item.country == filterParam) && (filterParamType == "All") && (item.price <= 130000) && (item.price >= 100000) && (price == "100000 - 130000"))  {
          return searchParam.some((newItem) => {
              return (
                  item[newItem]
                      ? item[newItem].toString() : ''
                      .toLowerCase()
                      .indexOf(q.toLowerCase()) > -1
              );
          });
      }
      else if ((filterParam == "All") && (filterParamType == "All") && (item.price <= 130000) && (item.price >= 100000) && (price == "100000 - 130000"))  {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
                    ? item[newItem].toString() : ''
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    }
          else if ((filterParam == "All") && (item.type_house == filterParamType) && (item.price <= 160000) && (item.price >= 130000) && (price == "130000 - 160000"))   {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        ? item[newItem].toString() : ''
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        }
        else if ((item.country == filterParam) && (item.type_house == "All") && (item.price <= 160000) && (item.price >= 130000) && (price == "130000 - 160000"))   {
          return searchParam.some((newItem) => {
              return (
                  item[newItem]
                      ? item[newItem].toString() : ''
                      .toLowerCase()
                      .indexOf(q.toLowerCase()) > -1
              );
          });
      }
        else if ((item.country == filterParam) && (item.type_house == filterParamType) && (item.price <= 160000) && (item.price >= 130000) && (price == "130000 - 160000"))   {
          return searchParam.some((newItem) => {
              return (
                  item[newItem]
                      ? item[newItem].toString() : ''
                      .toLowerCase()
                      .indexOf(q.toLowerCase()) > -1
              );
          });
      }
      else if ((filterParam == "All") && (filterParamType == "All") && (item.price <= 160000) && (item.price >= 130000) && (price == "130000 - 160000"))   {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
                    ? item[newItem].toString() : ''
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    }
      else if ((item.country == filterParam) && (item.type_house == filterParamType) && (filterParamPrice == "All"))  {
        return searchParam.some((newItem) => {
            return (
                item[newItem]
                    ? item[newItem].toString() : ''
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1
            );
        });
    }
        else if ((filterParam == "All") && (item.type_house == filterParamType) && (filterParamPrice == "All"))  {
          return searchParam.some((newItem) => {
              return (
                  item[newItem]
                      ? item[newItem].toString() : ''
                      .toLowerCase()
                      .indexOf(q.toLowerCase()) > -1
              );
          });
      }
        else if ((item.country == filterParam) && (filterParamType == "All") && (filterParamPrice == "All"))  {
          return searchParam.some((newItem) => {
              return (
                  item[newItem]
                      ? item[newItem].toString() : ''
                      .toLowerCase()
                      .indexOf(q.toLowerCase()) > -1
              );
          });
      }
        else if ((filterParam == "All") && (filterParamType == "All") && (filterParamPrice == "All"))  {
              return searchParam.some((newItem) => {
                  return (
                      item[newItem]
                          ? item[newItem].toString() : ''
                          .toLowerCase()
                          .indexOf(q.toLowerCase()) > -1
                  );
              });
          }
      });
    }


 
        return (
            <div>
                <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px]'>Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => {setFilterParam(country);setCountry(country)}}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu> 


    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Select your price</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => {setFilterParamPrice(price);setPrice(price)}}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {price}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu> 
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'
      >
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{type_house}</div>
          <div className='text-[13px]'>Select your type</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {types.map((type, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => {setFilterParamType(type);setType(type)}}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {type}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu> 
                </div >
                {search(items).length < 1 ? (  <section className='mt-40 text-center'> 
                <p className="text-gray-700"> There are no results matching your search</p></section>) : (
                <section className='mb-20'>
                <div className='container mx-auto'>
                  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                    {search(items).map((item) => (
                        <Link to={`/property/`+id+`/`+item.id}>
                        <div className='bg-white shadow-1 p-5 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={`data:image/png;charset=utf8;base64,${item.image_sm}`}alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
          {item.type_house}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
          {item.country}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{item.address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBed />
          </div>
          <div className='text-base'>{item.bedrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBath />
          </div>
          <div className='text-base'>{item.bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiArea />
          </div>
          <div className='text-base'>{item.surface}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>
        $ {item.price}
      </div>
    </div>
                      </Link>
                    ))}
                 </div>
                </div>
               </section>
                )}
            </div>
        );
    }

