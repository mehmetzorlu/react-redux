import React, { Component } from 'react';
import AddPost from './AddPost';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions';

class Posts extends Component {
    render(){
        const postList = this.props.posts.length ? (
            this.props.posts.map(post => {
                return (
                    <li className="collection-item avatar" key={post.id}>
                        <i className="material-icons gray circle">chat</i>
                        <span className="title">{post.title}</span>
                        <p>{post.content}</p>
                        <a href="#!" className="secondary-content">
                            <button className="waves-effect red btn" id={post.id} onClick={(e) => {this.props.deletePost(Number(e.target.id))}}>Delete</button>
                        </a>
                    </li>
                )
            })
        ) : (
            <p className="center">There is no posts!</p>
        );    
    
        return (
            <div>
                <h1>Posts</h1>
                <AddPost/>
                <ul className="collection">
                    {postList}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.postReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);