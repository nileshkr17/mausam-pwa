import React from 'react'
import '../style/search.css'


const Main = () => {
  return (
    <main>
        
        <div className='container-search'>
      <div className='input-wrap'>
        <i className="fas fa-search"></i>
        <label 
          for="product-search" 
          id="input-label"
        >
          
        </label>
        <input 
        //   onChange={}
        //   value={}
          type="text" 
          name="product-search" 
          id="product-search" 
          placeholder="Search Here"
        />
        <i 
        //   onClick={}
          className="fas fa-times"
        ></i>
      </div>
    </div>
    </main>
  )
}

export default Main