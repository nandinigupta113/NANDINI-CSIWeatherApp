
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
            //  console.log(weather);
            //  handleimage();
           }
        );
     }

  }

//   // const removebg = () => {
//   //   document.body.classList.remove("warm");
//   //   document.body.classList.remove("cold");
//   //   }
//   const handleimage = () => {
//     document.body.classList.remove("warm");
//     document.body.classList.remove("cold");
//    if(typeof weather.main!= "undefined"){ 
//           if( (weather.main.temp) > 20) {
//                  document.body.classList.add("warm");
//                  console.log("warm");
//                 }
//           else{
//                  document.body.classList.add("cold");
//                  console.log("cold");
//               }
//   }
//   else{
//     console.log("ellse");
//   }
// }


  return (
    <>
    <Weather query={query} setQuery={setQuery} weather={weather} search={search}/>
    </>
  )
}

export default App;
