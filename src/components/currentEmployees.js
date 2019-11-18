import React from 'react'
import Employees from './employees';
import axios from 'axios'; //for mongo

class CurrentEmployees extends React.Component {

    state = {
        employees: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/employees')
            .then((response) => {
                this.setState({ employees: response.data.employees })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>Current Employees</h1>
                <Employees myEmployees={this.state.employees}></Employees>
            </div>
        );
    }
}
export default CurrentEmployees;