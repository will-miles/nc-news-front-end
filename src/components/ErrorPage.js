import React from 'react';

const ErrorPage = props => {
  if (!props.err)
    return (
      <div>
        <h1>Error</h1>
        <p>404 Not found</p>
      </div>
    );
  const { status, statusText } = props.err.response;
  return (
    <div>
      <h1>Error</h1>
      <p>
        {status} {statusText}
      </p>
    </div>
  );
};

export default ErrorPage;
