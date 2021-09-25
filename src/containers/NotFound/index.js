import React from 'react';

const NotFound = (props) => {
  if (props.staticContext) {
    props.staticContext.NotFound = true;
  }

  return (
    <div>
      <div>404, sorry, page not found</div>
    </div>
  );
};

export default NotFound;
