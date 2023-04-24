import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';
import './RefuelingForm.css';

const RefuelingForm = () => {
  const [liters, setLiters] = useState('');
  const [price, setPrice] = useState('');
  const [distance, setDistance] = useState('');
  const [car, setCar] = useState('');
  const [isElectric, setIsElectric] = useState(false);
  const [kWh, setkWh] = useState('');
  const [priceElec, setPriceElec] = useState('');

  const { addRefuel, addCharge } = useContext(GlobalContext);

  const handleAddRefueling = (event) => {
    event.preventDefault();

    const newRefueling = {
        id: Math.floor(Math.random() * 1000000),
        liters,
        price,
        distance,
        car,
        isElectric
    }

    const newCharge = {
        id: Math.floor(Math.random() * 1000000),
        kWh,
        priceElec,
        isElectric,
        distance,
        car
    }

    isElectric ? (
      addCharge(newCharge)
    ) : (
      addRefuel(newRefueling)
    )
    
    setCar('');
    setDistance('');
    setIsElectric('');
    setLiters('');
    setPrice('');
    setPriceElec('');
    setkWh('');
  }

  return (
    <>
      <h4>Add New Refuel</h4>
      <form className='refueling-form' onSubmit={handleAddRefueling}>
        <div className='form-group'>
          <label htmlFor='isElectric'>
            <input type='checkbox' checked={isElectric} onChange={(event) => setIsElectric(event.target.checked)} />
            Electric Car
          </label>
        </div>
        {isElectric ? (
          <>
          <div className='form-group'>
              <label htmlFor='kWh'>kWh:</label>
              <input className='form-control' id='kWh' type='number' value={kWh} onChange={(event) => setkWh(event.target.value)} required />
            </div>
            <div className='form-group'>
              <label htmlFor='priceElec'>Electricity price €/kWh:</label>
              <input className='form-control' id='priceElec' type='number' value={priceElec} onChange={(event) => setPriceElec(event.target.value)} required />
            </div>
          </>
        ) : (
          <>
            <div className='form-group'>
              <label htmlFor='liters'>Liters:</label>
              <input className='form-control' id='liters' type='number' value={liters} onChange={(event) => setLiters(event.target.value)} required />
            </div>
            <div className='form-group'>
              <label htmlFor='price'>Price €:</label>
              <input className='form-control' id='price' type='number' value={price} onChange={(event) => setPrice(event.target.value)} required />
            </div>
          </>
        )}
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
