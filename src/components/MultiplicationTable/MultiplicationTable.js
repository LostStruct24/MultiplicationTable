import React, { Component } from 'react';
import './MultiplicationTable.css';
import { randomNumber, initNums } from '../RandomNumbers/RandomNumbers';
import Timer from '../CountdownTimer/Timer';

class MultiplicationTable extends Component {
    state = {
        value: '',
        multipInt1: initNums[0],
        multipInt2: initNums[1],
        productInt: initNums[2],
        rightAnswers: 0,
        wrongAnswers: 0
    };

    getinputValue = (event) => {
        this.setState({ value: event.target.value });

    }

    onButtonClick = (event) => {
        event.preventDefault();
        const inputValue = this.state.value;
        const productInt = this.state.productInt;

        const rightAnswers = this.state.rightAnswers;
        const wrongAnswers = this.state.wrongAnswers;


        if (Math.round(inputValue) === Math.round(productInt)) {
            this.setState({ rightAnswers: rightAnswers + 1});
            window.alert('Correct Answer!');
            //console.log('correct:', rightAnswers);
        } else {
            this.setState({ wrongAnswers: wrongAnswers + 1 });
            window.alert('Wrong Answer!');
            //console.log('wrong:', wrongAnswers);
        }

        const initNums = randomNumber();
        this.setState({ multipInt1: initNums[0] });
        this.setState({ multipInt2: initNums[1] });
        this.setState({ productInt: initNums[2] });
    }

    handleSubmit(event){ 
        event.preventDefault();
        this.setState({ value: '' });
    }

    render () {        
        return (
            <div className="MultiplicationTable">
                <div className='wrapper'>
                    <div className='timer'>
                        <Timer />
                    </div>
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
                    <input className='answer' type="number" onChange={this.getinputValue}></input>
                    <button className='btn' type='submit' onClick={this.onButtonClick}>✓</button>
                </div>
            </div>
        );
    }
    
}

export default MultiplicationTable;
