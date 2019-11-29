import React from 'react'
import Employees from './employees';
import axios from 'axios'; //for mongo
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                <container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Employees myEmployees={this.state.employees}></Employees>
                        </Col>
                        <Col></Col>
                    </Row>
                </container>

            </div>
        );
    }
}
export default CurrentEmployees;