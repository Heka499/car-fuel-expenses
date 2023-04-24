import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './TotalCost.css'

const TotalCost = ({ car }) => {
  const { refuels } = useContext(GlobalContext);

  const filteredRefuels = refuels.filter(refuel => refuel.car === car);

  const liters = filteredRefuels.map(refuel => Number(refuel.liters));
  const price = filteredRefuels.map(refuel => Number(refuel.price));
  const distanceGas = filteredRefuels.map(refuel => Number(refuel.distance));

  const totalLiters = liters
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  
    const totalPrice = price
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
    
  const totalDistanceGas = distanceGas
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const averageGasPrice = (Number(totalPrice) / Number(totalLiters)).toFixed(2);

  const averageExpensesGas = ((totalPrice / totalDistanceGas) * 100)
    .toFixed(2);
  const averageConsumptionGas = ((totalLiters / totalDistanceGas) * 100)
    .toFixed(2);

  return (
    <>
      <div className='total-cost-container'>
        <h4 className='total-cost-title'>{car}</h4>
          <div className='total-cost-info'>
                <div className="total-cost-info-item">
                    <h4>Total Sum:</h4>
                    <p>{totalPrice} €</p>
                </div>
                <div className="total-cost-info-item">
                    <h4>Average Gas Price:</h4>
                    <p>{averageGasPrice} €/Liter</p>
                </div>
                <div className="total-cost-info-item">
                    <h4>Total Consumption:</h4>
                    <p>{totalLiters} Liters</p>
                </div>
                <div className="total-cost-info-item">
                    <h4>Total Distance</h4>
                    <p>{totalDistanceGas} km</p>
                </div>
                <div className="total-cost-info-item">
                    <h4>Average Expenses</h4>
                    <p>{averageExpensesGas} € per 100km</p>
                </div>
                <div className="total-cost-info-item">
                    <h4>Average Consumption</h4>
                    <p>{averageConsumptionGas} Liters per 100km</p>
                </div>
          </div>
      </div>
    </>
  );
};

export default TotalCost;
