import React, { Component } from 'react';

class CounterGroupSum extends Component {
    render() {
        return (
            <div>
                <total>Sum of all counters: {this.props.getTotal}</total>
            </div>
        );
    }
}

export default CounterGroupSum;