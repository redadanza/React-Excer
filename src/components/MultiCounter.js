import React, { Component } from 'react';
import CounterGroup from './CounterGroup';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroupSum from './CounterGroupSum';

class MultiCounter extends Component {
    constructor(props){
        super(props);

        this.onGenerate = this.onGenerate.bind(this);
        
        this.state = { size: 0, total: 0};
    }
    onGenerate(size){
        this.setState({size});
    }
    getTotal = (value) =>{
        this.setState(() => ({total: value}))
    }

    render() {
        return (
            <div>
                <CounterSizeGenerator onGenerate={this.onGenerate} />
                <CounterGroupSum getTotal={this.state.total} />
                <CounterGroup size={this.state.size} getTotal={this.getTotal}/>
            </div>
        );
    }
}

export default MultiCounter;