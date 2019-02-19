import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <div className="postContainer">
      <div className="postHeader">
        <img src={props.post.thumbnailUrl} alt=""/>
        <span>{props.post.username}</span>
      </div>
      <img src={props.post.imageUrl} alt=""/>
      <div className="postComments">
        <div className="postButtons">
        <i className="far fa-heart" onClick={(e) => props.like(props.post, e)}></i>
        <i className="far fa-comment"></i>
        </div>
        <p>{props.post.likes} likes</p>
        <CommentSection post={props.post} commentValue={props.commentValue} addComment={props.addComment} commentChange={props.commentChange} />
      </div>
    </div>
  );
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default PostContainer;