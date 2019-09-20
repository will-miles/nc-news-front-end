import React, { Component } from 'react';
import NewComment from './NewComment';
import * as api from '../api';
import Vote from './Vote';

class CommentList extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.getCommentData();
  }

  render() {
    const { comments } = this.state;
    const { id, username } = this.props;
    return (
      <div>
        <NewComment id={id} username={username} addComment={this.addComment} />
        <ul className="commentList">
          {comments.map(comment => {
            return (
              <li key={comment.comment_id} className="commentCard">
                <h4 className="commentAuthor">{comment.author}</h4>
                <Vote
                  id={comment.comment_id}
                  votes={comment.votes}
                  endpnt="comments"
                />
                <p className="commentTime">
                  {new Date(comment.created_at).toUTCString().toString()}
                </p>
                <p className="commentBody">{comment.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  getCommentData = () => {
    const { id } = this.props;
    api.fetchCommentData(id).then(comments => {
      this.setState({ comments });
    });
  };

  addComment = NewComment => {
    this.setState(currentState => {
      return {
        comments: [NewComment, ...currentState.comments]
      };
    });
  };
}

export default CommentList;
