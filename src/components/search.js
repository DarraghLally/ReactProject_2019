import React from 'react';
import '../App.css';
import Axios from 'axios';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Search: '',
            employees: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitSearchEmployee = this.handleSubmitSearchEmployee.bind(this);
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
                if(response.data.data != null)
                {
                    this.setState({employees: response.data.data});
                    //console.log(this.state.employees);
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }


    render() {
        return (
            <div className="App">
                <h1>Search</h1> <br />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input
                                type="text"
                                placeholder="Search"
                                value={this.state.SearchItem}
                                onChange={this.handleSubmitSearchEmployee}
                            ></input>
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Search"
                            ></input>
                        </div>
                    </form>
                </div>

                <div>
                    <h1> {this.state.employees.fName} {this.state.employees.sName}</h1>
                </div>
            </div>
        );
    }
}

export default Search;