import {DELETE_USER, ADD_USER} from '../actions/userActions';

const initialUserState = {
    users: [
      {id: 1, name: 'Jane', mail:'jane@jane.com'},
      {id: 2, name: 'Eric', mail:'eric@eric.com.au'},
      {id: 3, name: 'Ivan', mail:'ivan@ivan.com.ru'},
      {id: 4, name: 'Suzanne', mail:'suzanne@suzanne.com.uk'},
    ]
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case DELETE_USER:
            let newUsers = state.users.filter(user => {
                return user.id !== action.id
            });
            return {
                users: newUsers
            }
        
        case ADD_USER:
            let user = {
                id: Math.random(),
                name : action.name,
                mail: action.mail
            }
            return {
                users: [user, ...state.users]
            };

        default:
            return state;
    }
}

export default userReducer;