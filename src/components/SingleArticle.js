import React, { Component } from 'react';
import CommentList from './CommentList';
import * as api from '../api';
import Vote from './Vote';
import ErrorPage from './ErrorPage';

class SingleArticle extends Component {
  state = {
    err: null,
    article: null
  };

  componentDidMount() {
    this.getArticleData();
  }

  render() {
    const { id, username } = this.props;
    const { err, article } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <div className="articleAndComments">
        {article ? (
          <>
            <Vote id={id} votes={article.votes} endpnt="articles" />
            <div className="singleArticle">
              <h3>{article.title}</h3>
              <p className="articleBody">{article.body}</p>
            </div>
            <CommentList id={id} username={username} endpnt="articles" />
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
  getArticleData = () => {
    const { id } = this.props;
    api
      .fetchArticleData(id)
      .then(article => {
        this.setState({ article });
      })
      .catch(err => {
        this.setState({
          err
        });
      });
  };
}

export default SingleArticle;
