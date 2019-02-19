import React from 'react';
import './CommentSection.css';
const moment = require('moment');

const CommentSection = props => {
  // console.log(props);
  return (
    <div className="commentSection">
      {props.post.comments.map(i => <p><span>{i.username}</span> {i.text}</p> )}
      <p>{moment(props.post.timestamp, 'MMMM Do YYYY, LTS').fromNow()}</p>
      <form onSubmit={(e) => props.addComment(props.post, e)}>
        <div className="form-group">
          <label>
            Add a comment:
          </label>
          <input type="text" value={props.commentValue} onChange={props.commentChange} />
          <input type="submit" value="Add comment" />
        </div>
      </form>
    </div>
  );
}
 
export default CommentSection;