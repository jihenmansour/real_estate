import {React, useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AddHouse = () => {

    const {id} = useParams();
    const [type_house, setType] = useState('House');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [country, setCountry] = useState('United States');
    const [address, setAddress] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [surface, setSurface] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [selectedFile, setSelectedFile] = useState('');



    const formData = new FormData();
    formData.append("type", type_house);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("country", country);
    formData.append("address", address);
    formData.append("bedrooms", bedrooms);
    formData.append("bathrooms", bathrooms);
    formData.append("surface", surface);
    formData.append("year", year);
    formData.append("price", price);
    formData.append("id_agent", id);
    formData.append("file", selectedFile[0]);

    const handleAddHouse = async (e) => {
        
        e.preventDefault()
        try {
          const response = await axios.post(`http://localhost:8080/api-state/house.php/`, formData)
          window.location.reload();
        } catch (e) {
          alert(e)
        }
      }
  return (
    <form  onSubmit={handleAddHouse} enctype="multipart/form-data">

      <div className="-mx-3 md:flex mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label  for="grid-state">
      Name
      </label>
      <input id="grid-year" type="text" name="name" value={name}onChange={(e) => setName(e.target.value)}  />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label for="grid-state">
        Type
      </label>
      <div className="cursor-pointer relative">
        <select className=" block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="type_house"
         value={type_house}
          onChange={(e) => setType(e.target.value)}  >
          <option value='House'>House</option>
          <option value='Apartment'>Apartment</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label  for="grid-state">
      Surface
      </label>
      <input id="grid-year" type="text" name="surface" value={surface} onChange={(e) => setSurface(e.target.value)} />
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label for="grid-state">
        Country
      </label>
      <div className="cursor-pointer relative">
      <select className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="country" 
        value={country}
        onChange={(e) => setCountry(e.target.value)}  >
          <option value='United States'>United States</option>
          <option value='Canada'>Canada</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            Address
          </label>
          <input id="grid-adress" type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)}  />
        </div>
        <div className="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
            Price
          </label>
          <input id="grid-price" type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)}  />
        </div>
        <div className="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
            Year
          </label>
          <input id="grid-price" type="text" name="year" value={year} onChange={(e) => setYear(e.target.value)}  />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            Bedrooms
          </label>
          <input id="grid-adress" type="text" name="bedrooms" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}  />
        </div>
        <div className="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
            Bathrooms
          </label>
          <input id="grid-price" type="text" name="bathrooms" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)}  />
        </div>
        <div class="md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
           Image
          </label>
          <input className=" file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-500 file:text-blue-50
            hover:file:cursor-pointer hover:file:bg-purple-500 
            hover:file:text-purple-50"  type="file" multiple onChange={(e) => {setSelectedFile(e.target.files) }}/>
        </div>
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
            Description
          </label>
          <textarea id="grid-adress" type="text" name="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write the real estate description..." value={description} onChange={(e) => setDescription(e.target.value)}  />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-2">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
        <button className=" px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" >
    Add house
        </button>
        </div>
      </div>
    </form>
  )
}

export default AddHouse