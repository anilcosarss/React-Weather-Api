import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import City from './City';


function App() {
  const key ="46a1fd8e5a459a6ffd9cb7a686d57d29";
  const [search,setSearch] = useState("");
  const [city,setCity] =useState();
  const [isClear,setIsClear] = useState(true)
  

  useEffect(()=> {

    async function weatherApi(){
      try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`)
        console.log(response) 
        setCity(response.data); 
        setIsClear(response.data.weather[0].main === 'Smoke' || response.data.weather[0].main === 'Clouds' || response.data.weather[0].main === 'Rain');

    
      } catch(error){
        console.error(error) 
      }
    } 
    weatherApi(); 
   
    },[search]);



  return (
    <div className="App h-screen" style={{
      backgroundImage: "url(https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000)",
      backgroundSize:"cover",
      boxShadow:`${isClear ? 'inset 10px 8px 140px 102px rgba(2,0,0,0.8)' : 'none' }`  ,
    }}>
      <div className='pt-8'>
        <input  onChange={(e)=> setSearch(e.target.value)}
         placeholder='Type a city..'
         type='text'
        className='px-3 w-[300px] py-3 placeholder-slate-300 text-slate-600 relative  rounded text-sm border border-slate-300 outline-none opacity-50 focus:opacity-100 focus:outline-none w-full' />
      </div>
      <City city={city}/>
       
    </div>
  );
}

export default App;
