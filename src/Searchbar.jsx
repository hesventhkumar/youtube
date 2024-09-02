import React from 'react'

const Searchbar = () => {
  return (
    
    <div style={{background:"black"}}>
      
        <div className="row">
          <div className="col-1"> 
            <i class="fa-solid fa-bars fa-rotate-180  p-3 px-4 fs-1"></i>
          </div>
          <div className="col">
            <form className="d-flex justify-content-center p-3">
              <input class="px-5 w-50 me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-danger " type="submit">Search</button> 
            </form>
          </div>
        </div>
        
      
    </div>
   
  )
}

export default Searchbar
