import React from 'react';
import Calc from '../Calc/Calc';
import './Rate.css';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date' : '',
      'currencyRate' : {}
    }
    this.currency = ['USD', 'EUR', 'CAD', 'PHP']
    this.getRate();
  }

  getRate = () => {
    fetch('https://api.exchangeratesapi.io/latest?base=RUB')
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
        this.setState({date: data.date})
        let result = {};
        for(let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        console.log(result);
        this.setState({currencyRate: result})
      })
  }

  render() {
    return (
      <div className="rate">
        <h3>Курс на {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName, i) => 
          (
            <div className="block flex-item" key={keyName}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}*</div>
              <p>* можно купить за 1 RUB</p>
            </div>
          )
          )}
        </div>
        <Calc rate={this.state.currencyRate}/>
      </div>
    );
  }
}

export default Rate;
