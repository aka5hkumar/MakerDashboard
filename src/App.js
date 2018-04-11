import React, { Component } from 'react';
import { Progress, Container, Card, Button, Jumbotron, CardTitle, CardText, CardColumns,
 CardSubtitle, CardBody, Row, Col } from 'reactstrap';

// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import machineData from './data.json';

const machine =  machineData.map((each, i) =>
<div className="text-center">
<Card body color={ each.status == "Disconnected" ? 'danger' : 'white' }  >
<h1 key={'macName_'+i}>{each.name}</h1>
<h2 key={'macIP_'+i}>{each.ip}</h2>
<p> Material Remaining
<Progress value={each.Material} /> </p>
<p key={'macTime_'+i}>Time remaining - {Math.floor(each.time/60)}:{each.time%60}</p>
</Card>
</div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
      <Row>
         {machine}
       </Row>
      </div>
    );
  }
}

export default App;
