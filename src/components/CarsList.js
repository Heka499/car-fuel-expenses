import React, { useContext } from 'react';
import CarTotalCost from './CarTotalCost';
import { GlobalContext } from '../context/GlobalState';
import ElectricCarTotalCost from './ElectricCarTotalCost'

const CarsList = () => {
  const { refuels, charges } = useContext(GlobalContext)
  const carSet = new Set(refuels.map(refuel => refuel.car));
  const uniqueCars = [...carSet];
  const eCarSet = new Set(charges.map(charges => charges.car))
  const uniqueECars = [...eCarSet]

  return (
    <>
      <h3>Costs Per Car</h3>
      <ul className='list'>
        <li>
          {uniqueCars.map(car => (
            <CarTotalCost key={car} car={car} />
          ))}
        </li>
        <li>
          {uniqueECars.map(car => (
            <ElectricCarTotalCost key={car} car={car} />
          ))}
        </li>
      </ul>
    </>
  );
};

export default CarsList;
