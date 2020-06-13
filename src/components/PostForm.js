import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createPost } from "../actions/postActions";

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };
    }
    onSubmit = (event) => {
        event.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body,
        };

        this.props.createPost(JSON.parse(JSON.stringify(post)));
        this.setState({
            title: "",
            body: "",
        });
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Body:</label>
                        <textarea
                            name="body"
                            value={this.state.body}
                            onChange={this.onChange}
                        ></textarea>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
