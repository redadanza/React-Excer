import React, { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props)
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
        this.hadleChange = this.hadleChange.bind(this);

        this.state= { 
            number:0,
        };
    }
    componentWillUnmount() {
        this.props.onChangeHandler(-this.state.number);
    }
    onIncrease(event){
        
        this.setState((prevState) => ({ number: prevState.number + 1 }), () => this.props.onChangeHandler(1));
        this.props.increaseSum();
    }
    onDecrease(event){
        this.setState((prevState) => ({ number: prevState.number - 1 }), () => this.props.onChangeHandler(-1));
        this.props.decreaseSum();
    }
    hadleChange(event){
        this.setState({number: event.target.value})
    }

    render() {
        return (
                <section>
                    <input type="button" value="+" onClick={this.onIncrease}/>
                    <span>{this.state.number}</span>
                    <input type="button" value="-" onClick={this.onDecrease}/>
                </section>
        );
    }
}
export default Counter;