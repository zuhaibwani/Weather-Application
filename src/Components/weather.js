import React from "react";
import { useState, useEffect } from "react";
import "./app.css"

function WeatherApp() {
  const [apiData,setApiData] = useState(null)
  const [search, setSearch] = useState("Delhi")
  
  useEffect(() => {
    async function getData(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4649bd1c393cd83b0dc47340fc8812e8`
        const res = await fetch(url)
        const data = await res.json()
        setApiData(data.main)
        console.log(data.main)
    }
    getData()
  },[search])
  
  
  
  return (
    <>
    <div className="container">
    <div className="box">
      
       <div className="inputData">
          <input
          type="search"
          className="inputField"
          placeholder="Enter City Name"
          onChange={(event)=> { setSearch(event.target.value) }}/> 
        </div>
          {!apiData ? (
          <p className="notFound"> No Data Found </p> 
        ) :( 
          <div>
            <div className="info"> 
                <h2 className="location">
                <i  className="fa-solid fa-location-dot locationIcon"></i>{search}
                </h2>
                <h1 className="temp">{apiData.temp} °Cel </h1>
                <h3 className="tempmin_max"> Min: {apiData.temp_min}°Cel | Max: {apiData.temp_max} °Cel </h3>
                <h4 className="humidity">Humidity : {apiData.humidity}</h4>
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
