import React, { Component } from 'react';
import * as api from '../api';

class CurrentUser extends Component {
  state = {
    newUser: '',
    user: {},
    isLoading: true
  };

  componentDidMount() {
    this.getUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.getUser();
    }
  }

  render() {
    const { newUser, user, isLoading } = this.state;
    return (
      <div className="currentUser">
        {isLoading ? <h2>Loading...</h2> : ''}
        <h3>{user.name}</h3>
        <img className="userImg" src={user.avatar_url} alt="User avatar" />
        <p>{user.username}</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="username"
            className="newUserInput"
            value={newUser}
            onChange={this.handleChange}
          ></input>
          <button className="newUserSubmit">change user</button>
        </form>
      </div>
    );
  }
  getUser = () => {
    const { username } = this.props;
    api.fetchUser(username).then(user => {
      this.setState({ user, isLoading: false });
    });
  };
  handleChange = event => {
    const { value } = event.target;
    this.setState({ newUser: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { newUser } = this.state;
    this.props.changeUser(newUser);
    this.setState({ newUser: '' });
  };
}

export default CurrentUser;
