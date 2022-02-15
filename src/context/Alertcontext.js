import React, { useReducer } from "react";

const AlertContext = React.createContext();

const AlertState = (props) => {

    const initialState = null;
    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const setAlert = (message, type) => {
        dispatch({ type: 'SET_ALERT', payload: { message, type } })
    }
    setTimeout(() => { dispatch({ type: "REMOVE_ALERT" }) }, 5000)

    return <AlertContext.Provider value={{ alert: state, setAlert: setAlert }}>
        {props.children}
    </AlertContext.Provider>

}
const AlertReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALERT':
            return action.payload
        case "REMOVE_ALERT":
            return null
        default:
            return state
    }
}
export { AlertState, AlertContext };