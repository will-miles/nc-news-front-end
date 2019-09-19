import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';

class Articles extends Component {
  state = {
    sort_by: '',
    order: '',
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.uri !== this.props.uri ||
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order
    ) {
      this.getArticles();
    }
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <div className="articles">
        <form className="sortForm" onSubmit={this.handleSubmit}>
          <select>
            <option value="title">Title</option>
            <option value="votes">Votes</option>
            <option value="author">Author</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
          </select>
          <select>
            <option value="asc">ascending</option>
            <option value="desc">decending</option>
          </select>
          <button>Sort</button>
        </form>
        {isLoading ? <h3>Loading...</h3> : ''}
        <ul className="articleList">
          {articles.map(article => {
            return (
              <li key={`${article.article_id}up`} className="article">
                <Link
                  to={`/article/${article.article_id}`}
                  className="articleTitle"
                >
                  <h3>{article.title}</h3>
                </Link>
                <button className="articleUpBut">
                  <i className="arrow up"></i>
                </button>
                <button className="articleDownBut">
                  <i className="arrow down"></i>
                </button>
                <p className="articleVotes">
                  Votes: {JSON.stringify(article.votes)}
                </p>
                <p className="articleTopic">{article.topic}</p>
                <p className="articleAuthor">{article.author}</p>
                <p className="articleComments">
                  comments: {article.comment_count}
                </p>
                <p className="articleTime">
                  {new Date(article.created_at).toUTCString().toString()}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  handleUpClick = event => {
    event.persist();
    console.dir(event);
  };

  handleSubmit = event => {
    event.preventDefault();
    const sort_by = event.target[0].value;
    const order = event.target[1].value;
    this.setState({ sort_by, order });
  };

  getArticles = () => {
    const { topic } = this.props;
    const { sort_by, order } = this.state;
    api.fetchArticles(topic, sort_by, order).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default Articles;
