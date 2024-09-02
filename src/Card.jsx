import React from 'react'

const Card = (props) => {
  return (
    <div class="card" style={{width: "18rem",background:"black",color:"white"}}>
    <iframe className='rounded ' src={props.link}></iframe>
    <div class="card-body">
      <p className='m-0'>{props.para}</p>
      <p className='m-0'>{props.channel}</p>
      <p className='m-0'>{props.year}</p>
     
    </div>
  </div>

   
  )
}

export default Card
