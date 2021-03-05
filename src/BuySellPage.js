import React, { Component } from 'react';

class BuySell extends Component {
  constructor(props) {
    super(props);
    this.state = { asset: {} };
  }

  componentDidMount = () => {
    console.log('mounted');
    this.getCurrPrice();
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

  render() {
    const { asset } = this.state;

    return (
      <div>
          hi
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
