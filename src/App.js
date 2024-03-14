import Tours from './components/Tours';
import './App.css';
import data from './data.js'
import { useState } from 'react';


function App() {

  const[tours , setTours] = useState(data);  //ek variable banaya hamne tours jo ke initialize hua data se data vo cities ka data 

  function removeTour(id){     // koi bhe card use karne k liye ek specific chej chahiye hogi we use id in this case
    const newTours = tours.filter(city => city.id !== id); 
    setTours(newTours);     
  }


  if (tours.length === 0) {
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
      </div>
       
    );
    
  }

  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
      
    </div>
  );
}

export default App;
