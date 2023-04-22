import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const RefuelingHistory = () => {
  const { refuels } = useContext(GlobalContext)

  return (
    <table>
      <thead>
        <tr>
          <th>Car</th>
          <th>Liters</th>
          <th>Price (€)</th>
          <th>Distance (km)</th>
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
  );
}

export default RefuelingHistory