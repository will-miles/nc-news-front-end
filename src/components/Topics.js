import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    const { topics, isLoading } = this.state;
    return (
      <div>
        {isLoading ? <h3>Loading...</h3> : ''}
        <ul>
          {topics.map(topic => {
            return (
              <li key={topic.slug}>
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
    api.fetchTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  };
}

export default Topics;
