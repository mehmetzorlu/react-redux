export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TODO = 'ADD_TODO';

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const addTodo = (dueDate, action) => {
    return {
        type: ADD_TODO,
        dueDate,
        action
    }
}