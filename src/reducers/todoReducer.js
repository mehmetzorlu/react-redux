import {DELETE_TODO, ADD_TODO} from '../actions/todoActions';

const initialTodoState = {
    todos: [
      {id: 1, dueDate: 'Nov 10, 2019', action: 'compelete the assigment'},
      {id: 2, dueDate: 'Nov 11, 2019', action: 'get an appointment from the dentist'},
      {id: 3, dueDate: 'Nov 13, 2019', action: 'meet with John from Alabama '},
      {id: 4, dueDate: 'Nov 17, 2019', action: 'update the resume'}
    ]
}

const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case DELETE_TODO:
            let newTodos = state.todos.filter(todo => {
                return todo.id !== action.id
            });
            return {
                todos: newTodos
            }
        
        case ADD_TODO:
            let todo = {
                id: Math.random(),
                dueDate : action.dueDate,
                action: action.action
            }
            return {
                todos: [todo, ...state.todos]
            };

        default:
            return state;
    }
}

export default todoReducer;