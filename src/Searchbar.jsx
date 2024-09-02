import React from 'react'

const Searchbar = () => {
  return (
    <div className='d-flex justify-content-center py-3' style={{background:"black"}}>
       
        <form class="d-flex ">
            <input class="form-control px-5 me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-danger btn-outline-danger" type="submit">Search</button>
        </form>


    </div>
   
  )
}

export default Searchbar
