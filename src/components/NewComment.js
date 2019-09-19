import React, { Component } from 'react';
import * as api from '../api';

class NewComment extends Component {
  state = {
    value: ''
  };
  render() {
    const { value } = this.state;
    return (
      <form className="newComment" onSubmit={this.handleSubmit}>
        <input
          className="commentInput"
          type="text"
          placeholder="Type a new comment"
          onChange={this.handleChange}
          value={value}
        ></input>
        <button className="commentPost">Post</button>
      </form>
    );
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, username } = this.props;
    const { value } = this.state;
    api.postNewComment(id, username, value).then(comment => {
      this.props.addComment(comment);
    });
  };
}

export default NewComment;
