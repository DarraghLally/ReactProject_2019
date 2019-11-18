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

    componentDidMount() {
        alert(this.props.match.params.id);
        axios.get('http://localhost:4000/api/employees/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    FName: response.data.fName,
                    SName: response.data.sName,
                    Image: response.data.img,
                    _id: response.data._id
                });
            })
            .catch();
    }

    //Event when button pressed to add movie
    handleSubmit(e) {
        alert(this.state.FName + "      " + this.state.SName
            + "       " + this.state.Image + " "+ this.state._id);
        e.preventDefault();

        //To hold the object been sent
        const newEmp = {
            fName: this.state.FName,
            sName: this.state.SName,
            img: this.state.Image
        }
        //Post(to server, this object)
        axios.put('http://localhost:4000/api/employees/'+this.state._id, newEmp)
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
                        value="Update Employee">
                    </input>
                </div>
            </form>
        </div>
        )
    }

}
export default Edit;