import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EmployeeItem extends React.Component {

  constructor() {
    super();
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(e) {
    e.preventDefault();
    alert(this.props.employee._id);
    axios.delete('http://localhost:4000/api/employees/' + this.props.employee._id)
      .then(window.location.reload()) //to refresh
      .catch(console.log("Error - deleteEmployee()"));
  }

  render() {
    return (
      <div className="App">

        <Card style={{ width: '18rem' }}>
          <Card.Img className="defaultImage" variant="top" src={this.props.employee.img} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Name: {this.props.employee.fName} {this.props.employee.sName} 
            </Card.Text>
          </Card.Body>            
            <Link to ={"/edit/"+this.props.employee._id} className="btn btn-primary" >Edit</Link>
            <Button className='btn btn-primary' variant="danger" onClick={this.deleteEmployee} >Delete</Button>
        </Card>
      </div>
    )
  }
}
export default EmployeeItem;