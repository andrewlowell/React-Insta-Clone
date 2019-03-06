import React from 'react';
import StyledSpan from '../../styled-components/StyledSpan';
const moment = require('moment');

const CommentSection = props => {
  // console.log(props);
  return (
    <div className="commentSection">
      {props.post.comments.map(i => <p><StyledSpan>{i.username}</StyledSpan> {i.text}</p> )}
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