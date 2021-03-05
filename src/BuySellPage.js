import React, { Component } from 'react';

class BuySell extends Component {
  constructor(props) {
    super(props);
    this.state = { asset: {} };
  }

  componentDidMount = () => {
    console.log('mounted');
    this.getCurrPrice();
    this.handleSell(2);
    console.log(this.state);
  };

  getCurrPrice = () => {
    fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'x-api-key': '2jaIOnu18S6GcL4CB70w4d3PgB9rcvq74boP2yNe'
      }
    })
      .then(result => result.json())
      .then(result => {
        this.setState({
          asset: result
        });
      });
  };

  handleBuy = amount => {
    
    fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'x-api-key': '2jaIOnu18S6GcL4CB70w4d3PgB9rcvq74boP2yNe'
      },
      body: JSON.stringify({
        accountKey: '2b14f7ac-c26a-43f9-a202-b7c79a2fdbde',
        orderType: 'BUY',
        assetAmount: amount
      })
    })
      .then(result => result.json())
      .then(result => {
        console.log(result);
      });
  };

  handleSell = amount => {
    fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'x-api-key': '2jaIOnu18S6GcL4CB70w4d3PgB9rcvq74boP2yNe'
      },
      body: JSON.stringify({
        accountKey: '2b14f7ac-c26a-43f9-a202-b7c79a2fdbde',
        orderType: 'SELL',
        assetAmount: amount
      })
    })
      .then(result => result.json())
      .then(result => {
        console.log(result);
      });
  };

  render() {
    const { asset } = this.state;

    return (
      <div>
        {asset && (
          <div>
            <p>{asset.assetSymbol}</p>
            <p>{asset.price}</p>
            <p>{Date(asset.timestamp)}</p>
          </div>
        )}
      </div>
    );
  }
}

export default BuySell;
