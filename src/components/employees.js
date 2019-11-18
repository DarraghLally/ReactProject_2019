import React from 'react';
import EmployeeItem from './employeeItem';

class Employees extends React.Component {

    render() {
        return this.props.myEmployees.map((employee) => {
            //console.log({employee});
            return <EmployeeItem key={employee._id} employee={employee}></EmployeeItem>
        });
    }
}
export default Employees;