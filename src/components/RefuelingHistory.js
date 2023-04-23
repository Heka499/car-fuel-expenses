import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import './RefuelingHistory.css';

const RefuelingHistory = () => {
  const { refuels } = useContext(GlobalContext)

  return (
    <>
      <h4>Refueling History</h4>
      <table className='list-history'>
        <thead>
          <tr>
            <th className='list__header'>Car</th>
            <th className='list__header'>Liters</th>
            <th className='list__header'>Price (€)</th>
            <th className='list__header'>Distance (km)</th>
          </tr>
        </thead>
        <tbody>
          {refuels.map((refuel, index) => (
            <tr key={index}>
              <td>{refuel.car}</td>
              <td>{refuel.liters}</td>
              <td>{refuel.price}</td>
              <td>{refuel.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default RefuelingHistory
