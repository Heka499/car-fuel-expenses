import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

const RefuelingForm = () => {
  const [liters, setLiters] = useState('');
  const [price, setPrice] = useState('');
  const [distance, setDistance] = useState('');
  const [car, setCar] = useState('');

  const { addRefuel } = useContext(GlobalContext);

  const handleAddRefueling = (event) => {
    event.preventDefault();

    const newRefueling = {
        id: Math.floor(Math.random() * 1000000),
        liters,
        price,
        distance,
        car
    }
    
    addRefuel(newRefueling);

  }





  return (
    <>
        <form onSubmit={handleAddRefueling}>
        <label>
            Liters:
            <input type="number" value={liters} onChange={(event) => setLiters(event.target.value)} required />
        </label>
        <label>
            Price:
            <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} required />
        </label>
        <label>
            Distance:
            <input type="number" value={distance} onChange={(event) => setDistance(event.target.value)} required />
        </label>
        <label>
            Car:
            <input type="text" value={car} onChange={(event) => setCar(event.target.value)} required />
        </label>
        <button type="submit">Add Refueling Expense</button>
        </form>
    </>
  );
}

export default RefuelingForm