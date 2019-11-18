import React, { Component } from 'react';
import {addUser} from '../actions/userActions';
import {connect} from 'react-redux';

class AddUser extends Component {
    state = {
        name: '',
        mail: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    addUser = () => {
        this.props.addUser(this.state.name, this.state.mail);

        this.setState({
            name: '',
            mail: ''
        })
    }
    
    render() {
        return(
            <div className="container" >
                <div className="row" style={{ padding: 10, borderStyle: 'solid', borderColor: 'green' }}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">   
                            <div className="col s12">
                                <label>Name</label>
                                <input type="text" name="name" onChange={this.handleChange} value={this.state.name}></input>
                            </div>
                            <div className="col s12">
                                <label>E-mail</label>
                                <input type="text" name="mail" onChange={this.handleChange} value={this.state.mail}></input>
                                <button className="waves-effect waves-light btn" onClick={() => this.addUser()}>Add User</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (name, mail) => {dispatch(addUser(name, mail))}
    }
}

export default connect(null, mapDispatchToProps)(AddUser);