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
import Search from './components/search'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href="/">Employee Database</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/currentEmployees">Current Employee's</Nav.Link>
            <Nav.Link href="/addEmployee">Add Employee</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                {new Date().toLocaleTimeString()}
              </Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/currentEmployees" component={CurrentEmployees} />
          <Route path="/addEmployee" component={AddEmployee} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
