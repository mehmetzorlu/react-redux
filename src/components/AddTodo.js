import React, { Component } from 'react';
import {addTodo} from '../actions/todoActions';
import {connect} from 'react-redux';

class AddTodo extends Component {
    state = {
        dueDate: '',
        action: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    addTodo = () => {
        this.props.addTodo(this.state.dueDate, this.state.action);

        this.setState({
            dueDate: '',
            action: ''
        })
    }

    render() {
        return(
            <div className="container" >
                <div className="row" style={{ padding: 10, borderStyle: 'solid', borderColor: 'green' }}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">   
                            <div className="col s12">
                                <label>Due Date</label>
                                <input type="text" name="dueDate" onChange={this.handleChange} value={this.state.dueDate}></input>
                            </div>
                            <div className="col s12">
                                <label>Action</label>
                                <input type="text" name="action" onChange={this.handleChange} value={this.state.action}></input>
                                <button className="waves-effect waves-light btn" onClick={() => this.addTodo()}>Add Todo</button>
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
        addTodo: (dueDate, action) => {dispatch(addTodo(dueDate, action))}
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);