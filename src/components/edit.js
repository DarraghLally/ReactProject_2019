import React from 'react'
import Employees from './employees';
import axios from 'axios'; //for mongo
import  { Redirect } from 'react-router-dom'

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FName: '',
            SName: '',
            Image: '',
            Department: '',
            Position: '',
            Salary: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmployeeFNameChange = this.handleEmployeeFNameChange.bind(this);
        this.handleEmployeeSNameChange = this.handleEmployeeSNameChange.bind(this);
        this.handleEmployeeImageChange = this.handleEmployeeImageChange.bind(this);
        this.handleEmployeeDepartmentChange = this.handleEmployeeDepartmentChange.bind(this);
        this.handleEmployeePositionChange = this.handleEmployeePositionChange.bind(this);
        this.handleEmployeeSalaryChange = this.handleEmployeeSalaryChange.bind(this);
    }

    handleEmployeeFNameChange(e) {
        this.setState({ FName: e.target.value });
    }

    handleEmployeeSNameChange(e) {
        this.setState({ SName: e.target.value });
    }

    handleEmployeeImageChange(e) {
        this.setState({ Image: e.target.value });
    }

    handleEmployeeDepartmentChange(e) {
        this.setState({ Department: e.target.value });
    }

    handleEmployeePositionChange(e) {
        this.setState({ Position: e.target.value });
    }

    handleEmployeeSalaryChange(e) {
        this.setState({ Salary: e.target.value });
    }

    componentDidMount() {
        // alert(this.props.match.params.id);
        axios.get('http://localhost:4000/api/employees/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    FName: response.data.fName,
                    SName: response.data.sName,
                    Image: response.data.img,
                    Department: response.data.department,
                    Position: response.data.position,
                    Salary: response.data.salary,
                    _id: response.data._id
                });
            })
            .catch();
    }

    //Event when button pressed to add movie
    handleSubmit(e) {
        //To hold the object been sent
        const newEmp = {
            fName: this.state.FName,
            sName: this.state.SName,
            department: this.state.Department,
            position: this.state.Position,
            salary: this.state.Salary
        }
        //Post(to server, this object)
        axios.put('http://localhost:4000/api/employees/'+this.state._id, newEmp)
            .then()
            .catch();
        //Reset state
        this.setState({
            FName: '',
            SName: '',
            Department: '',
            Position: '',
            Salary: ''
        });
    }

    render() {
        return (
            <div>
            <h1>Edit Employee Form</h1>
            <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label>First Name:</label>
                    <input
                        type='text'
                        className='form-control'
                        value={this.state.FName}
                        onChange={this.handleEmployeeFNameChange}
                    ></input>
                </div>
                <div className='form-group'>
                    <label>Surname</label>
                    <input
                        type='text'
                        className='form-control'
                        value={this.state.SName}
                        onChange={this.handleEmployeeSNameChange}
                    ></input>
                </div>
                <div className='form-group'>
                    <label>Department</label>
                    <input
                        type='text'
                        className='form-control'
                        value={this.state.Department}
                        onChange={this.handleEmployeeDepartmentChange}
                    ></input>
                </div>
                <div className='form-group'>
                    <label>Position</label>
                    <input
                        type='text'
                        className='form-control'
                        value={this.state.Position}
                        onChange={this.handleEmployeePositionChange}
                    ></input>
                </div>
                <div className='form-group'>
                    <label>Salary</label>
                    <input
                        type='text'
                        className='form-control'
                        value={this.state.Salary}
                        onChange={this.handleEmployeeSalaryChange}
                    ></input>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Update Employee">
                    </input>
                </div>
            </form>
        </div>
        )
    }

}
export default Edit;