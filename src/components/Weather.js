
import React, {useState} from 'react';
import cloud from "./cloud.png";
import speed from "./speed.png";
import humidity from "./humidity.png";
import warm from "./warm.png";


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
   if(mode == "Enable Light Mode"){
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
        // document.body.classList.remove("warm");
        // document.body.classList.remove("cold");
        document.body.classList.add("blackbg");
        setmystyle({
            color: "white",
        })
        
        setbg({
            color: "white",
            backgroundColor: "black",
            boxShadow:"5px 5px white",
            border:"2px solid white"
          })
        setimg({
            filter:"invert(100%)"
          })
        setmode("Enable Light Mode");
        }
   }



  return (
    <div className="app">
        <div  className="head">
            <button onClick={togglemode} style={bg} >{mode}</button>
        </div>

      <div className="search-box">
        <input type="text" className={`search-bar ${mode === "Enable Dark Mode" ? "blackline" : "whiteline"}`} placeholder='Search'
        onChange={e => props.setQuery(e.target.value)} value={props.query} onKeyPress={props.search} style={mystyle}/>
      </div>
      
      <div className="images">
              <img src={props.weather.weather[0].main=== "Clouds"? cloud : warm} 

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
                <h3 style={mystyle}>{props.weather.wind.speed}</h3>
             </div>
             <div className="humid">
             <img style={img} src={humidity} alt="" />
                <h3 style={mystyle}>{props.weather.main.humidity}</h3>
             </div>
          </div>
          </>) : ("")}
       </div>
    </div>
  );
}