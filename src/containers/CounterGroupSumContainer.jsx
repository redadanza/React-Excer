import {connect} from "react-redux";
import CounterGroupSum from "../components/CounterGroupSum"

const mapStateToProps = state => ({
    sum: state.sum,
})

const CounterGroupSumContainer = connect(mapStateToProps) (CounterGroupSum)

export default CounterGroupSumContainer;