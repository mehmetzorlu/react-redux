import {DELETE_POST, ADD_POST} from '../actions/postActions';

const initialPostState = {
    posts: [
      {id: 1, title: 'new shoes', content:'My new shoes are perfect!'},
      {id: 2, title: 'bad politicians', content:'What a bad politicians we have'},
      {id: 3, title: 'Messi show is starting', content:'i think this night we would see perfect goals from Messi.'}
    ]
}

const postReducer = (state = initialPostState, action) => {
    switch (action.type) {
        case DELETE_POST:
            let newPosts = state.posts.filter(post => {
                return post.id !== action.id
            });
            return {
                posts: newPosts
            }
        
        case ADD_POST:
            let post = {
                id: Math.random(),
                title : action.title,
                content: action.content
            }
            return {
                posts: [post, ...state.posts]
            };

        default:
            return state;
    }
}

export default postReducer;