import React, { useState } from 'react'

const Card = ({id,image,price,name,info, removeTour}) => {

  const[readmore , setReadmore] = useState(false);

  const description =  readmore ? info : `${info.substring(0,200)}.....`

  function readmoreHandler(){
    setReadmore(!readmore);
  }

 

  return (
    <div className='card'>
        <img src={image} className='image'></img>

      <div className='tour-info'>
        <div className='tour-detaisl'>
            <h4 className='tour-price'>{price}</h4>
            <h4 className='tour-name'>{name}</h4>
        </div>

        <div className='description'>
          {description}
          <span className='read-more' onClick={readmoreHandler}> 
            {readmore ? `show less` : `read more`}
          </span>
          </div>
        </div>

        <button className='button-red' onClick={() => removeTour(id)}>
          Not Intrested
        </button>

    </div>


  )
}

export default Card