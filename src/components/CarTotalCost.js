import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './TotalCost.css'

const TotalCost = ({ car }) => {
  const { refuels } = useContext(GlobalContext);

  const filteredRefuels = refuels.filter(refuel => refuel.car === car);

  const liters = filteredRefuels.map(refuel => Number(refuel.liters));
  const price = filteredRefuels.map(refuel => Number(refuel.price));
  const distance = filteredRefuels.map(refuel => Number(refuel.distance));

  const totalLiters = liters
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalPrice = price
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalDistance = distance
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const averageExpenses = ((totalPrice / totalDistance) * 100)
    .toFixed(2);

  const averageConsumption = ((totalLiters / totalDistance) * 100)
    .toFixed(2);

  return (
    <>
      <div className='total-cost-container'>
        <h4 className='total-cost-title'>{car}</h4>
          <div className='total-cost-info'>
            <div className='total-cost-info-item'>
              <h4>Total Sum:</h4>
              <p>{totalPrice} €</p>
            </div>
            <div className='total-cost-info-item'>
              <h4>Total Consumption:</h4>
              <p>{totalLiters} Liters</p>
            </div>
            <div className='total-cost-info-item'>
              <h4>Total Distance</h4>
              <p>{totalDistance} km</p>
            </div>
            <div className='total-cost-info-item'>
              <h4>Average Expenses</h4>
              <p>{averageExpenses} € per 100km</p>
            </div>
            <div className='total-cost-info-item'>
              <h4>Average Consumption</h4>
              <p>{averageConsumption} Liters per 100km</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default TotalCost;
