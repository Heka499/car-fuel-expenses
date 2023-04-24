import React, {useState} from "react";

export const AddTransaction = () => {
    const [quantity, setQuantity] = useState(0);
    const [cost, setCost] = useState(0);
    const [distance, setDistance] = useState(0);
    const [name, setName] = useState('');
    return (
        <>
        <h3>Add new refueling expense</h3>
        <form>
            <div className="form-control">
                <label htmlFor="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}>Quantity of litres</label>
            <input type="number" placeholder="Enter quantity of litres..." />
            </div>
            <div className="form-control">
                <label htmlFor="cost" value={cost} onChange={(e) => setCost(e.target.value)}>Cost</label>
            <input type="number" placeholder="Enter refueling cost..." />
            </div>
            <div className="form-control">
                <label htmlFor="distance" value={distance} onChange={(e) => setDistance(e.target.value)}>Distance</label>
            <input type="number" placeholder="Enter distance driven..." />
            </div>
            <div className="form-control">
                <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter car name..." />
            </div>
            <button className="btn">Add refueling expense</button>
        </form>
        </>
    )
}