import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {  

  renderStocks = () => {
    if (this.props.sticks !== []){
        return this.props.stocks.map(stock => {
        return <Stock 
          key={stock.id}
          ticker={stock.ticker} 
          name={stock.name} 
          type={stock.type} 
          price={stock.price} 
        />
      })  
    }
  }

  render() {
    return(
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
          {console.log(this.renderStocks())}
      </div>
    );
  }

}

export default StockContainer;
