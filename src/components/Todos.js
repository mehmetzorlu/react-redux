import React, {Component} from 'react'
import AddTodo from './AddTodo';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/todoActions';

class Todos extends Component {

    render(){

        const todoList = this.props.todos.length ? (
            this.props.todos.map(todo => {
                return (
                    <li className="collection-item avatar" key={todo.id}>
                        <i className="material-icons gray circle">assignment_turned_in</i>
                        <span className="title">{todo.action}</span>
                        <p>{todo.dueDate}</p>
                        <a href="#!" className="secondary-content">
                            <button className="waves-effect red btn" id={todo.id} onClick={(e) => {this.props.deleteTodo(Number(e.target.id))}}>Delete</button>
                        </a>
                    </li>
                )
            })
        ) : (
            <p className="center">There is no todos!</p>
        );   
    
            return (
                <div>
                    <h1>Todos</h1>
                    <AddTodo/>
                    <ul className="collection">
                        {todoList}
                    </ul>
                </div>
            )
    }
}

const mapStateToProps = (state) =>{
    return {
        todos : state.todoReducer.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {dispatch(deleteTodo(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);