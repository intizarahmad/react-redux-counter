export const INCREAMENT_COUNTER = 'INCREAMENT_COUNTER'
export const DECREAMENT_COUNTER = 'DECREAMENT_COUNTER'
export const ADD_COUNTER = 'ADD_COUNTER'
export const REMOVE_COUNTER = 'REMOVE_COUNTER'
export const RESET = 'RESET'

export function increamentCounterAction(){
    return {
        type: INCREAMENT_COUNTER 
    }
} 
export function decreamentCounterAction(){
    return dispatch =>{
        setTimeout(()=>{
            dispatch({type: DECREAMENT_COUNTER })
        }, 3000)
    }
} 
export function addCounterAction(value){
    return {
        type: ADD_COUNTER,
        payload: value 
    }
} 
export function removeCounterAction(value){
    return {
        type: REMOVE_COUNTER ,
        payload: value 
    }
} 
export function reset(){
    return {
        type: RESET 
    }
} 
