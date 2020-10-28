import {connect} from "react-redux";
import Counter from "../components/Counter";
import {increaseSum, decreaseSum} from "../actions";



const mapDispatchToProps = (dispatch) => ({
    increaseSum: (size) => {dispatch(increaseSum())},
    decreaseSum: (size) => {dispatch(decreaseSum())}
})


const CounterContainer = connect(null, mapDispatchToProps)(Counter)

export default CounterContainer;