import React, { Component } from 'react';
import CounterGroup from './CounterGroup.js'
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer'
import CounterGroupSum from './CounterGroupSum'
import CounterGroupSumContainer from '../containers/CounterGroupSumContainer'
import CounterGroupContainer from '../containers/CounterGroupContainer';

class MultiCounter extends Component {
    constructor(props){
        super(props);


        
        this.state = { size: 0, total: 0};
    }

    onGenerate = (size) => {
        this.setState({size});
    }
    getTotal = (value) =>{
        this.setState(() => ({total: value}))
    }

    render() {
        return (
            <div>
                <CounterSizeGeneratorContainer onGenerate={this.onGenerate} />
                <CounterGroupSumContainer getTotal={this.state.total} />
                <CounterGroupContainer size={this.state.size} getTotal={this.getTotal}/>
            </div>
        );
    }
}

export default MultiCounter;