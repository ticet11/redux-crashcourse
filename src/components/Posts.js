import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
    UNSAFE_componentWillMount = () => {
        this.props.fetchPosts();
    };

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map((post) => (
            <div className='post' key={post.id}>
                <h3 className='title' >{post.title}</h3>
                <p className='body' >{post.body}</p>
            </div>
        ));
        return (
            <div className='posts-container' >
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = (state) => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
