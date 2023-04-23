import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';
import './RefuelingForm.css';

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
      <h4>Add New Refuel</h4>
      <form className='refueling-form' onSubmit={handleAddRefueling}>
        <div className='form-group'>
          <label htmlFor='liters'>Liters:</label>
          <input className='form-control' id='liters' type='number' value={liters} onChange={(event) => setLiters(event.target.value)} required />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price €:</label>
          <input className='form-control' id='price' type='number' value={price} onChange={(event) => setPrice(event.target.value)} required />
        </div>
        <div className='form-group'>
          <label htmlFor='distance'>Distance (km):</label>
          <input className='form-control' id='distance' type='number' value={distance} onChange={(event) => setDistance(event.target.value)} required />
        </div>
        <div className='form-group'>
          <label htmlFor='car'>Car:</label>
          <input className='form-control' id='car' type='text' value={car} onChange={(event) => setCar(event.target.value)} required placeholder='XXX-000' />
        </div>
        <button className='add-refuel-btn' type='submit'>Add Refueling Expense</button>
      </form>
    </>
  );
}

export default RefuelingForm
