import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';
import TopNav from './components/TopNav'
import RightNav from './components/RightNav'
import  Accordion from './components/Accordion'
import Wizard from './components/Wizard';
import Footer from './components/Footer';
import { Hidden } from '@material-ui/core';
class App extends Component {
  state = {
    isActive: false
  };
  render()
  { const greeting = 'Welcome to React';
  return (
    <div className="App">
        <Jumbotron  style={{padding: "0"}}>
        <h1 style={{color:"White" , background:"#2F4F4F"}} className="display-2">Customer Compass</h1>
        </Jumbotron>
        <div style={{margin:"auto"}}  className="row">
        <div className="col-10">
            <TopNav></TopNav>
            <div className="col-9">
                <Accordion></Accordion>
            </div>
        </div>
      <div className="col-2"><RightNav></RightNav></div>
      </div> 
      <div>
         {/* <Wizard/> */}
      </div>
      <div><Footer></Footer></div>
    </div>
  )
  }
}

export default App;