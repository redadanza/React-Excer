import { combineReducers } from "C:/Users/adanzra/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux";

export const updateCounterSize = size => {
    return {type: "UPDATE_COUNTER_SIZE", payload: size};
}

export const increaseSum = () => {
    return {type: "INCREASE_SUM"}
}
export const decreaseSum = () => {
    return {type: "DECREASE_SUM"}
}
