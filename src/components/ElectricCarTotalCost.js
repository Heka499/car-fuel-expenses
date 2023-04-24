import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './TotalCost.css'

const TotalCost = ({ car }) => {
  const { charges } = useContext(GlobalContext);

  const kWh = charges.map(charges => Number(charges.kWh))
  const priceElec = charges.map(charges => Number(charges.priceElec))
  const distanceElec = charges.map(charges => Number(charges.distance))

  const totalElecCost = priceElec
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalElecConsumption = kWh
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalDistanceElec = distanceElec
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const averagElecCost = Number(totalElecCost) / priceElec.length
  
  const totalCostElec = Number(totalElecConsumption) * averagElecCost 

  const averageExpensesElec = ((totalCostElec / totalDistanceElec) * 100)
      .toFixed(2);
  const averageConsumptionElec = ((totalElecConsumption / totalDistanceElec) * 100)
      .toFixed(2);

  return (
    <>
      <div className='total-cost-container'>
        <h4 className='total-cost-title'>{car}</h4>
          <div className='total-cost-info'>
                <div className='total-cost-info-item'>
                  <h4>Total Electricity Cost</h4>
                  <p>{totalCostElec} €</p>
                </div>
                <div className='total-cost-info-item'>
                  <h4>Average Electricity Cost</h4>
                  <p>{averagElecCost} €/kWh</p>
                </div>
                <div className='total-cost-info-item'>
                  <h4>Total Charging</h4>
                  <p>{totalElecConsumption} kWh</p>
                </div>
                <div className="total-cost-info-item">
                    <h4>Total Distance</h4>
                    <p>{totalDistanceElec} km</p>
                </div>
                <div className="total-cost-info-item">
                    <h4>Average Expenses</h4>
                    <p>{averageExpensesElec} € per 100km</p>
                </div>
                <div className="total-cost-info-item">
                    <h4>Average Consumption</h4>
                    <p>{averageConsumptionElec} kWh per 100km</p>
                </div>
          </div>
      </div>
    </>
  );
};

export default TotalCost;
