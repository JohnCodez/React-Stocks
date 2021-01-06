import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    searchWord: ''
  }

  async componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(r =>  r.json())
    .then(data => {
      this.setState({
        stocks: data,
      })
    })
  }

  filteredStocks = () => {
    // console.log(this.state.stocks)
      if (this.state.stock !== []) {return this.state.stocks.filter(stock => {
        return stock.name.toLowerCase().includes(this.state.searchWord.toLowerCase())
      })}
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filteredStocks()} />
              

            </div>
            <div className="col-4">

              <PortfolioContainer/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
