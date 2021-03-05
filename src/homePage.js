import React, { Component } from 'react';
import './index.css';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";


const firstName  = localStorage.getItem('firstName');
const key = localStorage.getItem('accountKey')

let balances;


fetch('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/balance', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': '2jaIOnu18S6GcL4CB70w4d3PgB9rcvq74boP2yNe'
  },
  body: JSON.stringify({
    accountKey: key
  })
})
.then((response) => {
  return response.json();
})
.then((data) => {
    localStorage.setItem('accountKey', JSON.stringify(data.accountKey));
    localStorage.setItem('assetBalance', JSON.stringify(data.assetBalance));
    localStorage.setItem('cashBalance', JSON.stringify(data.cashBalance));

  balances = data;

  console.log(localStorage.getItem('assetBalance'));


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
                <Card.Text align="center" style={{}} >
                    {localStorage.getItem('assetBalance')}
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>

            <Col>

            <Card style={{ }} class='w-25' align="center">
              <Card.Body>
                <Card.Title>Class Balances</Card.Title>
                <Card.Text class=".justify-content-center" align="center">
                    {localStorage.getItem('cashBalance')}
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
          <button type="button" class="btn btn-primary btn-lg mr-2" to="/" >Transaction History</button>
          <Link to="/buysell"> <button type="button" class="btn btn-primary btn-lg mr-2" to="/">Buy or Sell Assets</button> </Link>
          </Col>
 
          <Col></Col>
            
            
        </Row>

            


            </Container>
          </div>

      
    )
  }
}

export default Home;
