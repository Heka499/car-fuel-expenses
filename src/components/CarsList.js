import React, { useContext } from 'react';
import CarTotalCost from './CarTotalCost';
import { GlobalContext } from '../context/GlobalState';

const CarsList = () => {
  const { refuels } = useContext(GlobalContext)
  const carSet = new Set(refuels.map(refuel => refuel.car));
  const uniqueCars = [...carSet];

  return (
    <>
      {uniqueCars.map(car => (
        <CarTotalCost key={car} car={car} />
      ))}
    </>
  );
};

export default CarsList;
