import React, { Component } from 'react';
import './MultiplicationTable.css';
import { randomNumber } from '../RandomNumbers/RandomNumbers';


const initNums = randomNumber();

class MultiplicationTable extends Component {
    state = {
        value: '',
        multipInt1: initNums[0],
        multipInt2: initNums[1],
        productInt: initNums[2]
    };

    getinputValue = (event) => {
        console.log('Event:', event.target.value);
        this.setState({ value: event.target.value });
    }
   
    onButtonClick = (event) => {
        event.preventDefault();
        const inputValue = this.state.value;
        const productInt = this.state.productInt;
        console.log('inputValue on button click:', inputValue);

        if (Math.round(inputValue) === Math.round(productInt)) {
            window.alert('Correct answer');
        } else {
            window.alert('Wrong answer');
        }

        const initNums = randomNumber();
        this.setState({ multipInt1: initNums[0] });
        this.setState({ multipInt2: initNums[1] });
        this.setState({ productInt: initNums[2] });
    }

    render () {        
        return (
            <div className="MultiplicationTable">
                <div className='wrapper'>
                    <div className='container'>
                        <h4>{this.state.multipInt1}</h4>
                    </div>
                    <div className='container'>
                        <h4>×</h4>
                    </div>
                    <div className='container'>
                        <h4>{this.state.multipInt2}</h4>
                    </div>
                    <div className='container'>
                        <h4>=</h4>
                    </div>
                    <input className='answer' type='number' onChange={this.getinputValue}></input>
                    <button className='btn'  onClick={this.onButtonClick}>✓</button>
                </div>
            </div>
        );
    }
    
}

export default MultiplicationTable;
