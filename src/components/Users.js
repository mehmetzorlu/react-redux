import React, { Component } from 'react';
import AddUser from './AddUser';
import {connect} from 'react-redux';
import {deleteUser} from '../actions/userActions';

class Users extends Component {

    render() {
        const userList = this.props.users.length ? (
            this.props.users.map(user => {
                return (
                    <li className="collection-item avatar" key={user.id}>
                        <i className="material-icons gray circle">account_circle</i>
                        <span className="title">{user.name}</span>
                        <p>{user.mail}</p>
                        <a href="#!" className="secondary-content">
                            <button className="waves-effect red btn" id={user.id} onClick={(e) => {this.props.deleteUser(Number(e.target.id))}} >Delete</button>
                        </a>
                    </li>
                )
            })
        ) : (
            <p className="center">There is no users!</p>
        );    
    
        return (
            <div>
                <h1>Users</h1>
                <AddUser/> 
                <ul className="collection">
                    {userList}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        users: state.userReducer.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (id) => {dispatch(deleteUser(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);