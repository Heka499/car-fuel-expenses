export default (state, action) => {
    switch(action.type) {
        case 'DELETE_REFUEL':
            return {
                ...state,
                refuels: state.refuels.filter(refuel => refuel.id !== action.payload)
            }
        case 'ADD_REFUEL':
            return {
                ...state,
                refuels: [action.payload, ...state.refuels]
            }
        case 'ADD_CHARGE':
            return {
                ...state,
                charges: [action.payload, ...state.charges]
            }
        default:
            return state;
    }
}