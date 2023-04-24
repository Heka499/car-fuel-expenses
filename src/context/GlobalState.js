import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    refuels: [],
    charges: [],
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteRefuel(id) {
        dispatch({
            type: 'DELETE_REFUEL',
            payload: id
        });
    }

    function addRefuel(refuel) {
        dispatch({
            type: 'ADD_REFUEL',
            payload: refuel
        });
    }

    function addCharge(charge) {
        dispatch({
            type: 'ADD_CHARGE',
            payload: charge
        });
    }

    
    return (<GlobalContext.Provider value={{
        refuels: state.refuels,
        charges: state.charges,
        deleteRefuel,
        addRefuel,
        addCharge
    }}>
        {children}
    </GlobalContext.Provider>);
}