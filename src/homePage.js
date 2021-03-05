import React, { Component } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';


const firstName  = 'Mary';
let balances;


fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': '2jaIOnu18S6GcL4CB70w4d3PgB9rcvq74boP2yNe'
  },
  body: JSON.stringify({
    accountKey: '2b14f7ac-c26a-43f9-a202-b7c79a2fdbde'
  })
})
.then((response) => {
  return response.json();
})
.then((data) => {

  balances = data;
  console.log(balances);

  let asset = balances.assetBalance;
  let cash = balances.cashBalance;

  document.getElementById('bal1').innerText = asset;
  document.getElementById('bal2').innerText = cash;



  console.log(asset)

});


class Home extends Component {
  render() {
    return (
          <div className="App">
            <Container fluid>

        
        <br/>
        <br/>


            
        <h1>Welcome, {firstName} </h1>

        <br/>
        <br/>

        <Row>

          <Col>
            <Card style={{  }} class='w-25 card align-items-center' align="center">
              <Card.Body>
                <Card.Title>Asset Balances</Card.Title>
                <Card.Text id="bal1" align="center" style={{}} >

                </Card.Text>
              </Card.Body>
            </Card>
            </Col>

            <Col>

            <Card style={{ }} class='w-25' align="center">
              <Card.Body>
                <Card.Title>Asset Balances</Card.Title>
                <Card.Text id="bal2" class=".justify-content-center" align="center">
                </Card.Text>
              </Card.Body>
            </Card>

            </Col>

        </Row>

        <br/>
        <br/>

        <Row>
          <Col></Col>
          <Col>
            <button type="button" class="btn btn-primary btn-lg mr-2" to="/" style={{ }}>Transaction History</button>
            <button type="button" class="btn btn-primary btn-lg mr-2" to="/">Buy or Sell Assets</button>
          </Col>
 
          <Col></Col>
            
            
        </Row>

            


            </Container>
          </div>

      
    )
  }
}

export default Home;
