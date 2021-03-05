import React, { Component } from 'react';
import {Col, Container, Row, Form} from 'react-bootstrap';
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
          <div>
            <p className='assetTitle'>{asset.assetSymbol}</p>
            <Container>
              <Row>
                <Col>Price: {asset.price}</Col>
                <Col>{Date(asset.timestamp)}</Col>
              </Row>
            </Container>
            <form>
              <Form.Group className="form-group">
                <Form.Control className="assetAmount" type="number" placeholder="0"  value={assetAmount} onChange={this.handleChange}/>
              </Form.Group>
              <button className="buySellButton" onClick={this.handleBuy}>BUY</button>
              <button className="buySellButton" onClick={this.handleSell}>SELL</button>
            </form>
          </div>
        )}
      </BuySellPageStyles>
    );
  }
}

export default BuySell;
