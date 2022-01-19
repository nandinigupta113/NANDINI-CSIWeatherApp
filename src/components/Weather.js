
import React, {useState} from 'react';
import cloud from "./cloud.png";
import speed from "./speed.png";
import humidity from "./humidity.png";
import warm from "./warm.png";
// const api ={
//   key: "7687972c6093c8984a704c512687273a",
//   base:"https://api.openweathermap.org/data/2.5/"
// }



const handletime = () =>{ 
  let monthdetails = ["January","February","March","April","May","June","July","August","September","October","November","Decemmber"];
  let daysdetails = ["Sun", "Mon", "Tue", "Wed","Thur","Fri","Sat"];
  let date = new Date();
  let day = daysdetails[date.getDay()];
  let month = monthdetails[date.getMonth()];
  let onlydate = date.getDate();
  let yr = date.getFullYear();
  return `${day}, ${onlydate} ${month} ${yr}`
}




function App(props) {

//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState({});

//   const search = evt => {
//      if(evt.key === "Enter"){
//        fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
//         .then(res => res.json())
//         .then(result =>{
//              setWeather(result);
//              setQuery("");
//              console.log(result);
//       }
//         );
//      }

//   }




  return (
    <div className="app">
      <div className="search-box">
        <input type="text" className="search-bar" placeholder='Search'
        onChange={e => props.setQuery(e.target.value)} value={props.query} onKeyPress={props.search}/>
      </div>
      
      <div className="images">
              <img src={cloud} alt="" />
      </div>

      <div className="section-2">
        {(typeof props.weather.main!="undefined") ?(
          <>
          <div className="box1">
             <div className="weather-box">
               <div className="temp">{props.weather.main.temp}&#176;C</div>
               <div className="weather">{props.weather.weather[0].main}</div>
             </div>
             <div className="location-box">
               <div className="location">
                  <h1>{props.weather.name}, {props.weather.sys.country}</h1>
               </div>
               <div className="date">{handletime()}</div>
            </div>
          </div>
          <div className="box2">
             <div className="speed">
               <img src={speed} alt="" />
                <h3>{props.weather.wind.speed}</h3>
             </div>
             <div className="humid">
             <img src={humidity} alt="" />
                <h3>{props.weather.main.humidity}</h3>
             </div>
          </div>
          </>) : ("")}
       </div>
    </div>
  );
}

export default App;