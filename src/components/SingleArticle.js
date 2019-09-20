import React, { Component } from 'react';
import CommentList from './CommentList';
import * as api from '../api';
import Vote from './Vote';

class SingleArticle extends Component {
  state = {
    article: null
  };

  componentDidMount() {
    this.getArticleData();
  }

  render() {
    const { id, username } = this.props;
    const { article } = this.state;
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
    api.fetchArticleData(id).then(article => {
      this.setState({ article });
    });
  };
}

export default SingleArticle;
