import React from 'react';
import logo from './logo.svg';
import './App.css';

//Added Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//Pages
import Home from './components/home'
import CurrentEmployees from './components/currentEmployees'
import AddEmployee from './components/addEmployee'
import Edit from './components/edit'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/currentEmployees">Current Employee's</Nav.Link>
            <Nav.Link href="/addEmployee">Add Employee</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/currentEmployees" component={CurrentEmployees} />
          <Route path="/addEmployee" component={AddEmployee} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
