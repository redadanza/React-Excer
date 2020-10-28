import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            size: 0,
        };
    }
    onChange = (event) => {
        const value = event.target.value;
        this.setState(() => {
            return { size: value }  
        }, () => this.props.onGenerate(value));
        this.props.updateCounterSize(value);
    }
    
    render() {
        return (
                <fieldset>
                    <label htmlFor="size">size: </label>
                    <input type="number" 
                    name="size" 
                    id="size"
                    value={this.state.size}
                    onChange={this.onChange}
                    class="w3-input"
                    />
                </fieldset>
        );
    }
}

export default CounterSizeGenerator;