import React from "react";

export const Consumption = () => {
    return (
        <div class="cons-container">
            <div>
            <h4>Total costs</h4>
            <p id="TotalCosts" class="totalcosts">0.00 €</p>
            </div>
            <div>
            <h4>Total kilometers</h4>
            <p id="TotalKm" class="totalkm">0 km</p>
            </div>
            <div>
            <h4>Average expenses</h4>
            <p id="AverageExp" class="averageexp">0 € / 100 km</p>
            </div>
            <div>
            <h4>Average consumption</h4>
            <p id="AverageCon" class="averagecon">0 liter / 100 km</p>
            </div>
        </div>
    )
}