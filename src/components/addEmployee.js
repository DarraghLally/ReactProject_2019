import React from 'react';
import axios from 'axios'; //Added for mongo

class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FName: '',
            SName: '',
            Image: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmployeeFNameChange = this.handleEmployeeFNameChange.bind(this);
        this.handleEmployeeSNameChange = this.handleEmployeeSNameChange.bind(this);
        this.handleEmployeeImageChange = this.handleEmployeeImageChange.bind(this);
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

    //Event when button pressed to add employee
    handleSubmit(e) {
        alert(this.state.FName + "      " + this.state.SName
            + "       " + this.state.Image);
        e.preventDefault();

        //To hold the object been sent
        const newEmp = {
            fName: this.state.FName,
            sName: this.state.SName,
            img: this.state.Image
        }
        //Post(to server, this object)
        axios.post('http://localhost:4000/api/employees', newEmp)
            .then()
            .catch();
        //Reset state
        this.setState({
            FName: '',
            SName: '',
            Image: ''
        });
    }

    render() {
        return (
            <div>
                <h1>Add Employee Form</h1>
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
                        <label>Image</label>
                        <textarea
                            row='3'
                            className='form-control'
                            value={this.state.Image}
                            onChange={this.handleEmployeeImageChange}
                        ></textarea>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Add Employee">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddEmployee;