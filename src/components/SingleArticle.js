import React, { Component } from 'react';
import * as api from '../api';

class SingleArticle extends Component {
  state = {
    article: null,
    comments: []
  };

  componentDidMount() {
    this.getArticleData();
    this.getCommentData();
  }

  render() {
    const { article, comments } = this.state;
    return (
      <div className="articleAndComments">
        {article ? (
          <>
            <div className="singleArticle">
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
            <>
              <ul className="commentList">
                {comments.map(comment => {
                  return (
                    <li key={comment.comment_id} className="commentCard">
                      <h4 className="commentAuthor">{comment.author}</h4>
                      <button className="commentUpVote">Up Vote</button>
                      <button className="commentDownVote">Down Vote</button>
                      <h4 className="commentVotes">
                        {JSON.stringify(comment.votes)}
                      </h4>
                      <p className="commentTime">
                        {new Date(comment.created_at).toUTCString().toString()}
                      </p>
                      <p className="commentBody">{comment.body}</p>
                    </li>
                  );
                })}
              </ul>
            </>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
  getArticleData = () => {
    const { id } = this.props;
    api.fetchArticleData(id).then(article => {
      this.setState({ article });
    });
  };
  getCommentData = () => {
    const { id } = this.props;
    api.fetchCommentData(id).then(comments => {
      this.setState({ comments });
    });
  };
}

export default SingleArticle;
