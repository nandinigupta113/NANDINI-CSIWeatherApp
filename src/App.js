import './App.css';
import React, {useState} from 'react';
import cloud from "./cloud.png";
import speed from "./speed.png";
import humidity from "./humidity.png";
const api ={
  key: "319776c92f706176e539adce9dbe2a62",
  base:"https://api.openweathermap.org/data/2.5/"
}
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

function App() {

//  const [queryAPI, setqueryAPI] = useState("");
//  const [weather, setweather] = useState("");

//  const search = (evt) =>{
//      if(evt.key === "Enter"){
//        fetch(`${api.base}weather?q=${queryAPI}&units=metric&APPID=${api.key}`)
//         .then(res => res.json())
//         .then(result => {
//           setweather(result)
//         });
//         console.log(result);
//      }
//  }

  return (
    <div className="app">
      <div className="search-box">
        <input type="text" className="search-bar" placeholder='Search' />
      </div>
      <div className="images">
              <img src={cloud} alt="" />
      </div>
      <div className="section-2">
          <div className="box1">
             <div className="weather-box">
               <div className="temp">15&#176;C</div>
               <div className="weather">Sunny</div>
             </div>
             <div className="location-box">
               <div className="location">
                  <h1>New York City, US</h1>
               </div>
               <div className="date">{handletime()}</div>
            </div>
          </div>
          <div className="box2">
             <div className="speed">
               <img src={speed} alt="" />
                <h3>10km/h</h3>
             </div>
             <div className="humid">
             <img src={humidity} alt="" />
                <h3>68%</h3>
             </div>
          </div>
       </div>
    </div>
  );
}

export default App;
