import React from 'react'
import '../style/search.css'


const Main = () => {
  return (
    <main>
        <div className='box'>
          <div className='inputData'>
        <i className="fas fa-search"></i>
        <input 
        //   onChange={}
        //   value={}
          type="search" 
          className='inputField' 
          placeholder="Search Here"
          // onChange={()}

        />
        </div>
      <div className='info'>
        <h2 className='location'>
        <i class="fa-sharp fa-solid fa-street-view"></i>Pune
          </h2> 
          <h1 className='temp'>
            5.25 Cel  
          </h1> 
          <h3 className='tempmin_max'>Min: 5.25 Cel | Max: 5.25 Cel</h3>
      </div>
      <div className='wave -one'></div>
      <div className='wave -three'></div>
      <div className='wave -two'></div>
    </div>
    
    
    
    </main>
  )
}

export default Main