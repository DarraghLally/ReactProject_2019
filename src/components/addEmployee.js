import React from 'react';
import axios from 'axios'; //Added for mongo

class AddEmployee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FName: '',
            SName: '',
            Base64Image: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmployeeFNameChange = this.handleEmployeeFNameChange.bind(this);
        this.handleEmployeeSNameChange = this.handleEmployeeSNameChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);

    }

    handleEmployeeFNameChange(e) {
        this.setState({ FName: e.target.value });
    }

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
        alert(e.target.files[0]);
        this.getBase64(e.target.files[0], (base64) => {
            this.setState({ Base64Image: base64 });
        })
    }
    
    //Event when button pressed to add employee
    handleSubmit(e) {
        // alert(this.state.FName + "      " + this.state.SName
        //     + "       " + this.state.Base64Image);
        // e.preventDefault();

        //To hold the object been sent
        const newEmp = {
            fName: this.state.FName,
            sName: this.state.SName,
            locImg: this.state.Base64Image
        }
        //Post(to server, this object)
        axios.post('http://localhost:4000/api/employees', newEmp)
            .then()
            .catch();
        //Reset state
        this.setState({
            FName: '',
            SName: '',
            Base64Image: ''
        });
    }

    render() {
        return (
            <div>
                <h1>Add Employee Form</h1>
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
                    {/*  */}
                    <div>

                    </div>
                    <div>
                        <label>Real Image Upload</label>
                        <input
                            type='file'
                            className='form-control'
                            onChange={this.handleImageChange}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Add Employee">
                        </input>
                    </div>
                </form>
                <img src={this.state.Base64Image}></img>
            </div>
        );
    }
}

export default AddEmployee;