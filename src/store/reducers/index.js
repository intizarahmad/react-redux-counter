import {INCREAMENT_COUNTER, DECREAMENT_COUNTER, ADD_COUNTER, REMOVE_COUNTER, RESET } from '../actions'
const initialState = {
    counter: 0
}
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case INCREAMENT_COUNTER:
            return {
                ...state, 
                counter: state.counter+1
            }
        case DECREAMENT_COUNTER:
            return {
                ...state, 
                counter: state.counter-1
            }
        case ADD_COUNTER:
            return {
                ...state, 
                counter: state.counter + action.payload
            }
        case REMOVE_COUNTER:
            return {
                ...state, 
                counter: state.counter - action.payload
            }
        case RESET:
            return {
                ...state, 
                counter: 0
            }
    }
    return state
}

export default reducer;