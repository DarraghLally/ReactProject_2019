import React from 'react';
import '../App.css';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Search: '',
            employees: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitSearchEmployee = this.handleSubmitSearchEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    //Search
    handleSubmitSearchEmployee(e) {
        this.setState({ Search: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        Axios.get('http://localhost:4000/api/search/' + this.state.Search)
            .then((response) => {
                //console.log(response.data.data);
                if (response.data.data != null) {
                    this.setState({ employees: response.data.data });
                    //console.log(this.state.employees);
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    deleteEmployee(e) {
        e.preventDefault();
        //alert(this.props.employee._id);
        Axios.delete('http://localhost:4000/api/employees/' + this.state.employees._id)
            .then(window.location.reload()) //to refresh
            .catch(console.log("Error - deleteEmployee()"));
    }

    render() {
        return (
            <div className="App">
                <br />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="Search"
                                onChange={this.handleSubmitSearchEmployee}
                            ></input>
                            <input
                                type="submit"
                                value="Search"
                            ></input>
                        </div>
                    </form>
                </div>

                <div>
                    <div className="App">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className="defaultImage" variant="top" border-radius="8px" width="100px" height="100px" src={this.state.employees.locImg} />
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    <b>Name:</b>  {this.state.employees.fName} {this.state.employees.sName}<br />
                                    <b>Department:</b>  {this.state.employees.department}<br />
                                    <b>Position:</b>  {this.state.employees.position}<br />
                                    <b>Salary:</b> {this.state.employees.salary}
                                </Card.Text>
                            </Card.Body>
                            <Link to={"/edit/" + this.state.employees._id} className="btn btn-primary" >Edit</Link>
                            <Button className='btn btn-primary' variant="danger" onClick={this.deleteEmployee} >Delete</Button>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;