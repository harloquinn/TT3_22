import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import BuySellPageStyles from './style';

class BuySell extends Component {
  constructor(props) {
    super(props);
    this.state = { asset: {}, assetAmount: 0};
  }

  componentDidMount = () => {
    this.getCurrPrice();
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
        assetAmount: this.state.assetAmount
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
        assetAmount: this.state.assetAmount
      })
    })
      .then(result => result.json())
      .then(result => {
        console.log(result);
      });
  };

  handleChange = (event) => {
    this.setState({assetAmount: event.target.value})
  }

  render() {
    const { asset, assetAmount } = this.state;

    return (
      <BuySellPageStyles>
        {asset && (
          <div className="buySellContainer">
            <p className='assetTitle'>{asset.assetSymbol}</p>
                <p className="priceText">Price: {asset.price}</p>
                <p>at {Date(asset.timestamp)}</p>
            <form>
              <Form.Group>
                <Form.Control className="assetAmount" type="number" placeholder="0"  value={assetAmount} onChange={this.handleChange}/>
              </Form.Group>
            </form>
            <div>
              <button className="buySellButton" onClick={this.handleBuy}>BUY</button>
              <button className="buySellButton" onClick={this.handleSell}>SELL</button>
            </div>
          </div>
        )}
      </BuySellPageStyles>
    );
  }
}

export default BuySell;
