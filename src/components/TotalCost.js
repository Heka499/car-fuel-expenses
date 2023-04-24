import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import './TotalCost.css'

const TotalCost = () => {
  const { refuels } = useContext(GlobalContext);

  const liters = refuels.map(refuels => Number(refuels.liters))
  const price = refuels.map(refuels => Number(refuels.price))
  const distance = refuels.map(refuels => Number(refuels.distance))


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
    <div className="total-cost-container">
        <h2 className="total-cost-title">Total Cost</h2>
        <div className="total-cost-info">
            <div className="total-cost-info-item">
                <h4>Total Sum:</h4>
                <p>{totalPrice} €</p>
            </div>
            <div className="total-cost-info-item">
                <h4>Total Consumption:</h4>
                <p>{totalLiters} Liters</p>
            </div>
            <div className="total-cost-info-item">
                <h4>Total Distance</h4>
                <p>{totalDistance} km</p>
            </div>
            <div className="total-cost-info-item">
                <h4>Average Expenses</h4>
                <p>{averageExpenses} € per 100km</p>
            </div>
            <div className="total-cost-info-item">
                <h4>Average Consumption</h4>
                <p>{averageConsumption} Liters per 100km</p>
            </div>       
        </div>
    </div>
  )
}

export default TotalCost
