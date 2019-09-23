import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
import ErrorPage from './ErrorPage';

class Topics extends Component {
  state = {
    err: null,
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    const { err, topics, isLoading } = this.state;
    if (err) return <ErrorPage err={err} />;
    return (
      <div>
        {isLoading ? <h3>Loading...</h3> : ''}
        <ul>
          {topics.map(topic => {
            return (
              <li className="topicCard" key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>
                  <h3>{topic.slug}</h3>
                </Link>
                <p>{topic.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  getTopics = () => {
    api
      .fetchTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false });
      })
      .catch(err => {
        this.setState({
          err
        });
      });
  };
}

export default Topics;
