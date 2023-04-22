import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    refuels: []
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



    return (<GlobalContext.Provider value={{
        refuels: state.refuels,
        deleteRefuel,
        addRefuel
    }}>
        {children}
    </GlobalContext.Provider>);
}