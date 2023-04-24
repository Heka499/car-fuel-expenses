import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import './TotalCost.css'

const TotalCost = () => {
  const { refuels, charges } = useContext(GlobalContext);

  const liters = refuels.map(refuels => Number(refuels.liters))
  const price = refuels.map(refuels => Number(refuels.price))
  const distanceGas = refuels.map(refuels => Number(refuels.distance))
  
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
  
  const averagElecCost = charges.length > 0 && priceElec.length > 0
    ? (Number(totalElecCost) / priceElec.length).toFixed(2)
    : '0.00';

  const averageConsumptionElec = charges.length > 0 && totalDistanceElec > 0
    ? ((totalElecConsumption / totalDistanceElec) * 100).toFixed(2)
    : '0.00';

  const totalCostElec = charges
    .map(charge => Number(charge.priceElec) * Number(charge.kWh))
    .filter(cost => cost > 0)
    .reduce((acc, cost) => (acc += cost), 0)
    .toFixed(2);

  const averageExpensesElec = charges.length > 0 && totalDistanceElec > 0
    ? ((totalCostElec / totalDistanceElec) * 100).toFixed(2)
    : '0.00';
  
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
  
  const averageGasPrice = refuels.length > 0 && totalLiters > 0
    ? (Number(totalPrice) / Number(totalLiters)).toFixed(2)
    : '0.00';
  
  const averageExpensesGas = refuels.length > 0 && totalDistanceGas > 0
    ? ((totalPrice / totalDistanceGas) * 100).toFixed(2)
    : '0.00';
  
  const averageConsumptionGas = refuels.length > 0 && totalDistanceGas > 0
    ? ((totalLiters / totalDistanceGas) * 100).toFixed(2)
    : '0.00';
  

    
  return (
    <div className="total-cost-container">
        <h2 className="total-cost-title">Total Cost</h2>
        <h3 className='total-cost-title'>Gas Cars</h3>
        <div className="total-cost-info">
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
        <h3 className='total-cost-title'>Electric Cars</h3>
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
  )
}

export default TotalCost
