import React, { Component } from 'react';
import * as api from '../api';

class CurrentUser extends Component {
  state = {
    allUsers: [],
    user: {},
    isLoading: true
  };

  componentDidMount() {
    this.getUser();
    this.getAllUsers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.getUser();
      this.getAllUsers();
    }
  }

  render() {
    const { allUsers, user, isLoading } = this.state;
    return (
      <div className="currentUser">
        {isLoading ? <h2>Loading...</h2> : ''}
        <p className="nameOfUser">{user.name}</p>
        <img className="userImg" src={user.avatar_url} alt="User avatar" />
        <p className="username">{user.username}</p>
        <form className="changeUserForm" onSubmit={this.handleSubmit}>
          <select>
            {allUsers.map(user => {
              return (
                <option key={user.username} value={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>
          <button className="newUserSubmit">change user</button>
        </form>
      </div>
    );
  }
  getAllUsers = () => {
    api.fetchAllUsers().then(allUsers => {
      this.setState({ allUsers });
    });
  };

  getUser = () => {
    const { username } = this.props;
    api.fetchUser(username).then(user => {
      this.setState({ user, isLoading: false });
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    event.persist();
    const username = event.target[0].value;
    this.props.changeUser(username);
  };
}

export default CurrentUser;
