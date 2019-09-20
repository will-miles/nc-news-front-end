import React, { Component } from 'react';
import * as api from '../api';

class Vote extends Component {
  state = {
    votes: 0,
    increment: 0
  };

  componentDidMount() {
    this.getVotes();
  }

  render() {
    const { votes } = this.state;
    return (
      <div className="vote">
        <button onClick={this.handleUpClick} className="upVote">
          <i className="arrow up"></i>
        </button>
        <button onClick={this.handleDownClick} className="downVote">
          <i className="arrow down"></i>
        </button>
        <p className="votes">Votes: {JSON.stringify(votes)}</p>
      </div>
    );
  }

  getVotes = () => {
    const { votes } = this.props;
    this.setState({ votes });
  };

  handleUpClick = () => {
    const { id, endpnt } = this.props;
    const { increment } = this.state;
    if (increment < 1) {
      this.setState(currentState => {
        return {
          votes: currentState.votes + 1,
          increment: currentState.increment + 1
        };
      });
      api.patchVotes(id, endpnt, { inc_votes: 1 });
    }
  };

  handleDownClick = () => {
    const { id, endpnt } = this.props;
    const { increment } = this.state;
    if (increment > -1) {
      this.setState(currentState => {
        return {
          votes: currentState.votes - 1,
          increment: currentState.increment - 1
        };
      });
      api.patchVotes(id, endpnt, { inc_votes: -1 });
    }
  };
}

export default Vote;
