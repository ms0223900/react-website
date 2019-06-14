import React from 'react';
import Input from './components/Input';
import Output from './components/Output';
import ButtonPanel from './components/ButtonPanel';
import './App.css';

class Calc extends React.Component {
		constructor(props) {
	    super(props);
	    this.state = {
				equation: '',
        result: 0,
	      memory: []
	    };
  }


    onButtonPress = event => {
        let equation = this.state.equation;
        const pressedButton = event.target.innerHTML;

        if (pressedButton === 'C') return this.clear();
				else if (pressedButton === 'M+') {
					alert(this.state.memory);
					this.setState({equation: '', result: 0});
				}
				else if (pressedButton === 'M-') {
					const newmem = this.state.memory.map(function(element){
						return element*(-1);
					})
					// this.state.memory = this.state.memory.concat(newmem);
					alert(newmem);
				}
				else if (pressedButton === 'MR') {
					function SumDatareduce(arr){
    				return arr.reduce((a,b)=>a+b);
					}
					const result =  SumDatareduce(this.state.memory);
					this.setState({result});
				}
        else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') equation += pressedButton;
        else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) equation += ' ' + pressedButton + ' ';
        else if (pressedButton === '=') {
            try {
								function evil(fn){
								    var Fn = Function;
								    return new Fn('return ' + fn)();
								}
                const evalResult = evil(equation);
                const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
								this.state.memory.push(result);
                this.setState({result});
            } catch (error) {
                alert('Invalid Mathematical Equation');
            }
        }
        else {
            equation = equation.trim();
            equation = equation.substr(0, equation.length - 1);
        }

        this.setState({equation: equation});
    }

    clear() {
        this.setState({equation: '', result: 0});
    }

	render() {
		return (
			<div className="app">
				  <main className="calculator">
						<Output result={this.state.result} />
						<Input equation={this.state.equation} />
						<ButtonPanel onButtonPress={this.onButtonPress} />
					</main>
			</div>
		);
	}
}

export default Calc;
