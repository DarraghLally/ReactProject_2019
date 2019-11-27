import React from 'react';
import axios from 'axios'; //Added for mongo

class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FName: '',
            SName: '',
            Base64Image: '',
            Department: '',
            Position: '',
            Salary: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmployeeFNameChange = this.handleEmployeeFNameChange.bind(this);
        this.handleEmployeeSNameChange = this.handleEmployeeSNameChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleEmployeeDepartmentChange = this.handleEmployeeDepartmentChange.bind(this);
        this.handleEmployeePositionChange = this.handleEmployeePositionChange.bind(this);
        this.handleEmployeeSalaryChange = this.handleEmployeeSalaryChange.bind(this);
    }
    //First Name
    handleEmployeeFNameChange(e) {
        this.setState({ FName: e.target.value });
    }
    //Surname
    handleEmployeeSNameChange(e) {
        this.setState({ SName: e.target.value });
    }

    //Local Images
    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    handleImageChange(e) {
        this.getBase64(e.target.files[0], (base64) => {
            this.setState({ Base64Image: base64 });
        })
    }

    //Department
    handleEmployeeDepartmentChange(e) {
        this.setState({ Department: e.target.value });
    }

    //Position
    handleEmployeePositionChange(e) {
        this.setState({ Position: e.target.value });
    }

    //Salary
    handleEmployeeSalaryChange(e) {
        this.setState({ Salary: e.target.value });
    }

    //Event when button pressed to add employee
    handleSubmit(e) {
        //To hold the object been sent
        const newEmp = {
            fName: this.state.FName,
            sName: this.state.SName,
            locImg: this.state.Base64Image,
            department: this.state.Department,
            position: this.state.Position,
            salary: this.state.Salary
        }
        //Post(to server, this object)
        axios.post('http://localhost:4000/api/employees', newEmp)
            .then()
            .catch();
        //Reset state
        this.setState({
            FName: '',
            SName: '',
            Base64Image: '',
            Department: '',
            Position: '',
            Salary: ''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* First Name */}
                    <div className='form-group'>
                        <label>First Name:</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.FName}
                            onChange={this.handleEmployeeFNameChange}
                        ></input>
                    </div>
                    {/* Surname */}
                    <div className='form-group'>
                        <label>Surname</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.SName}
                            onChange={this.handleEmployeeSNameChange}
                        ></input>
                    </div>
                    {/* Image */}
                    <div>
                        <label>File Image</label>
                        <input
                            type='file'
                            className='form-control'
                            onChange={this.handleImageChange}
                        ></input>
                    </div>
                    {/* Department */}
                    <div className='form-group'>
                        <label>Department</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.Department}
                            onChange={this.handleEmployeeDepartmentChange}
                        ></input>
                    </div>
                    {/* Position */}
                    <div className='form-group'>
                        <label>Position</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.Position}
                            onChange={this.handleEmployeePositionChange}
                        ></input>
                    </div>
                    {/* Salary */}
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
                            value="Add Employee">
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddEmployee;