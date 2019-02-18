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
        <i class="far fa-heart"></i>
        <i class="far fa-comment"></i>
        </div>
        <p>{props.post.likes} likes</p>
        <CommentSection post={props.post} />
      </div>
    </div>
  );
}

PostContainer.PropTypes = {

};

export default PostContainer;