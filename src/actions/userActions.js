export const DELETE_USER = 'DELETE_USER';
export const ADD_USER = 'ADD_USER';

export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        id
    }
}

export const addUser = (name, mail) => {
    return {
        type: ADD_USER,
        name,
        mail
    }
}