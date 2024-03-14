import React from 'react'
import Card from './Card.js'

const Tours = ({tours , removeTour}) => {    //{tours}  iska mtlb hai tours naam ka data mil rha hai 
  return (
    <div className='container'>
    <div> 
      <h2 className='title'>Plan with Love</h2>
    </div>

    <div className='cards'>
      {
        tours.map( (city) =>{          // arrow function me city likh k ham tours data k under har ek city ko map kr rhe hai 
          return <Card {...city} key={city.id} removeTour={removeTour}></Card>          //har ek city k liye ek card return ho rha hai
        })
      }
    </div>
     

    </div>
  )
}

export default Tours;