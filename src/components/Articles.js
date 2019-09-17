import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.uri !== this.props.uri) {
      this.getArticles();
    }
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div>
        {isLoading ? <h3>Loading...</h3> : ''}
        <ul>
          {articles.map(article => {
            return (
              <li key={article.article_id} className="articleList">
                <Link
                  to={`/article/${article.article_id}`}
                  className="articleTitle"
                >
                  <h3>{article.title}</h3>
                </Link>
                <p className="articleTopic">{article.topic}</p>
                <p className="articleAuthor">{article.author}</p>
                <p className="articleVotes">
                  Votes: {JSON.stringify(article.votes)}
                </p>
                <p className="articleComments">
                  comments: {article.comment_count}
                </p>
                <p className="articleTime">{article.created_at}</p>
                <button className="articleUpBut">Up Vote</button>
                <button className="articleDownBut">Down Vote</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  getArticles = () => {
    const { topic } = this.props;
    api.fetchArticles(topic).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default Articles;
