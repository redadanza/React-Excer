import React, { Component } from 'react';

class CounterGroupSum extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <total>Total: {this.props.getTotal}</total>
            </div>
        );
    }
}

export default CounterGroupSum;