import React from 'react';
import * as api from '../api';

const Delete = ({ username, author, id, getCommentData }) => {
  const handleClick = () => {
    api.deleteComment(id).then(() => {
      getCommentData();
    });
  };
  return (
    <div className="delete">
      {username === author ? <button onClick={handleClick}>delete</button> : ''}
    </div>
  );
};

export default Delete;
