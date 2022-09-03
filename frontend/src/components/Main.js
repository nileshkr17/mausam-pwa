import React,{useEffect, useState} from 'react'
import '../style/search.css'


const Main = () => {

      let [city,setCity]= useState(null);
      // city->intial value
      // setCity update valye
      const [search,setSearch] = useState("Jamshedpur"); //default

      useEffect(()=>{
        let fetchApi = async() => {

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3f3ea83e56b6fbaf4d64e90f73fa2bf3`
            let response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson)
            setCity(resJson.main);
        }
        
        fetchApi();
      },[search] )

      

  return (
    <>
        <div className='box'>
          <div className='inputData'>
        <input
          type="search" 
          className='inputField' 
          placeholder="Search Here"
           onChange={(event) => {setSearch(event.target.value) } }

        />
        </div>

        { !city ? (
            <div class="alert alert-dismissible alert-danger my-5">
            <strong>Oh snap!</strong> <a href="/" class="alert-link">Check your internet</a> and try submitting again with valid city name.
          </div>
          ) : (
            
            <div>
              <div className="weathercon">
              {/* style={{marginTop: present ? 10 : 0 }} */}
              <i class="fas fa-sun fa-spin"></i>
                </div>
              <div className='info'>
        <h2 className='location'>
        <i className="fa-sharp fa-solid fa-street-view"></i>{search}
          </h2> 
          <h1 className='temp'>
            {city.temp} °C
          </h1>
          <h3 className='tempmin_max'>Min: {city.temp_min} °C | Max: {city.temp_max} °C </h3>
      </div>
      <div className='wave -one'></div>
      <div className='wave -three'></div>
      <div className='wave -two'></div>
            </div>
          )}
      
    </div>
    
    
    
    </>
  )
}

export default Main