import React from 'react';
const moment = require('moment');

const CommentSection = props => {
  return (
    <div className="commentSection">
      {props.post.comments.map(i => <p><span>{i.username}</span> {i.text}</p> )}
      <p>{moment(props.post.timestamp, 'MMMM Do YYYY, LTS').fromNow()}</p>
    </div>
  );
}
 
export default CommentSection;