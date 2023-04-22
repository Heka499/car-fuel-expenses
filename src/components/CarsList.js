import React, { useContext } from 'react';
import CarTotalCost from './CarTotalCost';
import { GlobalContext } from '../context/GlobalState';

const CarsList = () => {
  const { refuels } = useContext(GlobalContext)
  const cars = refuels.map(refuels => refuels.car)

  return (
    <>
      {cars.map(car => (
        <CarTotalCost key={car} car={car} />
      ))}
    </>
  );
};

export default CarsList;
