import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/commentBox'

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('root')
);