export const DELETE_POST = 'DELETE_POST';
export const ADD_POST = 'ADD_POST';

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}

export const addPost = (title, content) => {
    return {
        type: ADD_POST,
        title,
        content
    }
}