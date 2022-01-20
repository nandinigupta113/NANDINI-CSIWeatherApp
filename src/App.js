
import React, {useState} from 'react';
import Weather from './components/Weather';


const api ={
  key: "7687972c6093c8984a704c512687273a",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {
  
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  

  const search = evt => {
     if(evt.key === "Enter"){
       fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result =>{
             setWeather(result);
             setQuery("");
           }
        );
     }

  }


  return (
    <>
    <Weather query={query} setQuery={setQuery} weather={weather} search={search}/>
    </>
  )
}

export default App;
