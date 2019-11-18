import React, { Component } from 'react';
import {addPost} from '../actions/postActions';
import {connect} from 'react-redux';

class AddPost extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    addPost = () => {
        this.props.addPost(this.state.title, this.state.content);

        this.setState({
            title: '',
            content: ''
        })
    }

    render() {
        return(
            <div className="container" >
                <div className="row" style={{ padding: 10, borderStyle: 'solid', borderColor: 'green' }}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">   
                            <div className="col s12">
                                <label>Title</label>
                                <input type="text" name="title" onChange={this.handleChange} value={this.state.title}></input>
                            </div>
                            <div className="col s12">
                                <label>Content</label>
                                <input type="text" name="content" onChange={this.handleChange} value={this.state.content}></input>
                                <button className="waves-effect waves-light btn" onClick={() => this.addPost()}>Add Post</button>
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
        addPost: (title, content) => {dispatch(addPost(title, content))}
    }
}

export default connect(null, mapDispatchToProps)(AddPost);