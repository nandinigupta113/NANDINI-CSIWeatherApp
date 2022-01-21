
import React, {useState} from 'react'
import speed from "./speed.png";
import humidity from "./humidity.png";
import cloud from "./daypic/cloudday.png";
import clear from "./daypic/clearday.png";
import fog from "./daypic/fogday.png";
import haze from "./daypic/hazeday.png";
import rain from "./daypic/rainday.png";
import snow from "./daypic/snowday.png";
import storm from "./daypic/stormday.png";
import wind from "./daypic/windday.png";

import cloudnight from "./nightpic/cloudnight.png";
import clearnight from "./nightpic/clearnight.png";
import fognight from "./nightpic/fognight.png";
import hazenight from "./nightpic/hazenight.png";
import rainnight from "./nightpic/rainnight.png";
import snownight from "./nightpic/snownight.png";
import stormnight from "./nightpic/stormnight.png";
import windnight from "./nightpic/windnight.png";




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




 export default function Weather(props) {

  const [bg, setbg] = useState({
    backgroundColor: "rgb(146, 175, 164)"
  })
  const [mystyle, setmystyle] = useState({
      color:" rgb(25, 40, 83)",
  })
  const [img,setimg] = useState({
      filter:"none"
  })
 


  const [mode, setmode] = useState("Enable Dark Mode")
  
  const togglemode = () => {
   if(mode === "Enable Light Mode"){
     document.body.classList.remove("blackbg");
      setmystyle({
        color:" rgb(25, 40, 83)",
      })
      setbg({
        backgroundColor: "rgb(146, 175, 164)"
      })
      setimg({
        filter:"none"
      })
      setmode("Enable Dark Mode");

   }
    else{
        document.body.classList.remove("warm");
        document.body.classList.remove("cold");
        document.body.classList.add("blackbg");
        setmystyle({
            color: "white",
        })
        
        setbg({
            color: "white",
            background: "linear-gradient(to left,rgb(44, 26, 37),rgb(105, 24, 92))",
            boxShadow:"5px 5px white",
            border:"2px solid white"
          })
        setimg({
            filter:"invert(85%)"
          })
        setmode("Enable Light Mode");
        }
   }



  return (
    <div className={`app ${ (mode === "Enable Dark Mode") ?
                               ((typeof props.weather.main!= "undefined") ?((props.weather.main.temp > 16)?
                                  (document.body.classList.remove("cold") & document.body.classList.add("warm")): (document.body.classList.add("cold"))):document.body.classList.add("cold")):""}`}>
        <div  className="head">
            <button onClick={togglemode} style={bg} >{mode}</button>
        </div>

      <div className="search-box">
        <input type="text" className={`search-bar ${mode === "Enable Dark Mode" ? "blackline" : "whiteline"}`} placeholder='Search'
        onChange={e => props.setQuery(e.target.value)} value={props.query} onKeyPress={props.search} style={mystyle}/>
      </div>
      
      <div className="images">
              <img style={img} src={
                (typeof props.weather.main!= "undefined") ?
                 (props.weather.weather[0].main=== "Clouds"?
                                      ( mode === "Enable Dark Mode"? cloud : 
                                            cloudnight
                                      ):
                  props.weather.weather[0].main=== "Clear"? 
                                      ( mode === "Enable Dark Mode"? clear : 
                                            clearnight
                                       ):
                  props.weather.weather[0].main=== "Fog"?
                                       ( mode === "Enable Dark Mode"? fog : 
                                            fognight
                                       ):
                  props.weather.weather[0].main=== "Dust"?
                                       ( mode === "Enable Dark Mode"? wind : 
                                               windnight
                                       ):
                  props.weather.weather[0].main=== "Haze"? 
                                       ( mode === "Enable Dark Mode"? haze : 
                                               hazenight
                                       ):
                  props.weather.weather[0].main=== "Smoke"?
                                       ( mode === "Enable Dark Mode"? fog : 
                                               fognight
                                       ):
                  props.weather.weather[0].main=== "Mist"?
                                       ( mode === "Enable Dark Mode"? fog : 
                                               fognight
                                       ):
                  props.weather.weather[0].main=== "Snow"?
                                       ( mode === "Enable Dark Mode"? snow : 
                                               snownight
                                       ):
                  props.weather.weather[0].main=== "Rain"?
                                       ( mode === "Enable Dark Mode"? rain : 
                                               rainnight
                                        ):
                  props.weather.weather[0].main=== "Drizzle"?
                                       ( mode === "Enable Dark Mode"? fog : 
                                               fognight
                                       ):
                  props.weather.weather[0].main=== "Thunderstorm"?
                                       ( mode === "Enable Dark Mode"? storm : 
                                               stormnight
                                       ):( mode === "Enable Dark Mode"? clear : 
                                                clearnight
                                          )) : ( mode === "Enable Dark Mode"? clear : 
                                                clearnight
                                            )} 

                alt="" />
      </div>

      <div className="section-2">
        {(typeof props.weather.main!="undefined") ?(
          <>
          <div className="box1">
             <div className="weather-box">
               <div className="temp" style={mystyle}>{props.weather.main.temp}&#176;C</div>
               <div className={`weather ${mode === "Enable Dark Mode" ? "blueborder" : "whiteborder"}`} style={mystyle}>{props.weather.weather[0].main}</div>
             </div>
             <div className="location-box">
               <div className="location">
                  <h1 style={mystyle}>{props.weather.name}, {props.weather.sys.country}</h1>
               </div>
               <div style={mystyle} className="date">{handletime()}</div>
            </div>
          </div>
          <div className="box2">
             <div className="speed">
               <img style={img} src={speed} alt="" />
                <h3 style={mystyle}>{props.weather.wind.speed}km/hr</h3>
             </div>
             <div className="humid">
             <img style={img} src={humidity} alt="" />
                <h3 style={mystyle}>{props.weather.main.humidity}%</h3>
             </div>
          </div>
          </>) : ("")}
       </div>
    </div>
  );
}