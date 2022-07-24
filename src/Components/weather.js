import React from "react";
import { useState, useEffect } from "react";
import { BsFillCloudRainHeavyFill, BsSun, BsFillCloudyFill, BsCloudHaze2Fill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { RiMistFill } from "react-icons/ri";
import "./app.css"

function WeatherApp() {
  const [apiData,setApiData] = useState(null)
  const [search, setSearch] = useState("Delhi")
  const [myWeather, setWeather] = useState([])
  
  useEffect(() => {
    async function getData(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4649bd1c393cd83b0dc47340fc8812e8`
        const res = await fetch(url)
        const data = await res.json()
        setApiData(data.main)
        setWeather(data.weather)
        // setIcon(data.weather[0].icon)
        // let iconURL = `https://openweathermap.org/img/w/${icon}.png`
        console.log(data.main)
        console.log(data.weather)
    }
    getData()
    console.log(search)
  },[search])
  
  
  const rCs = (currWeather)=>{
    let animation = <BsSun/>
    if(currWeather=== "Clouds"){
      animation = <BsFillCloudyFill/>
    } else if(currWeather=== "Rain"){
      animation = <BsFillCloudRainHeavyFill/>
    }  else if(currWeather=== "Thunderstorm"){
      animation = <AiFillThunderbolt/>
    }   else if(currWeather=== "Mist"){
      animation = <RiMistFill/>
    } else if(currWeather=== "Haze"){
      animation = <BsCloudHaze2Fill/>
    }  
    return animation
  }
  
  return (
    <>
    <div className="container">
    <div className="box">
      
       <div className="inputData">
          <input
          type="search"
          className="inputField"
          placeholder="Enter City Name"
          onChange={(event)=> {
            // setSearch(event.target.value)
            //   console.log(search)
            setTimeout(()=>{
              setSearch(event.target.value)
            },3000)
            
           }}/> 
           
        </div>
          {!apiData ? (
          <p className="notFound"> No Data Found </p> 
        ) :( 
          <div>
            <div className="info"> 
                <h2 className="location">
                <i  className="fa-solid fa-location-dot locationIcon"></i>{search}
                </h2>
                <h4 className="myWeather"><span className="ani">{rCs(myWeather[0].main)}</span>{myWeather[0].main}</h4>
                <h1 className="temp">{apiData.temp} °Cel </h1>
                <h3 className="tempmin_max"> Min: {apiData.temp_min}°Cel | Max: {apiData.temp_max} °Cel </h3>
                
            </div>
            
              <div className="wave -one"></div> 
              <div className="wave-two"></div>
              <div className="wave-three"></div>
              
        </div>
        
           )} 
      
          </div>
          
    </div>
    </>
  )
}

export default WeatherApp;
