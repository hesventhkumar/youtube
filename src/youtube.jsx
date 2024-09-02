import React from 'react'
import Nav from './nav'
import Searchbar from './Searchbar'
import Content  from './Content'


const Youtube = () => {
  return (
    <div>

     
      
      <Searchbar/>
      <div className="row">
        <div className="col-2">
          
          <Nav/>

        </div> 
        <div className="col-10">
           <Content />
        </div>
      </div>
        


        


       

        
    </div>
  )
}

export default Youtube
