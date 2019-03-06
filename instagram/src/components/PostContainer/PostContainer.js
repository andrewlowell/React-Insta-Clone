import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledSpan from '../../styled-components/StyledSpan';

const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: 1px solid gray;
  border-radius: 3px;
`;

const PostContainer = props => {
  return (
    <StyledPostContainer>
      <div className="postHeader">
        <img src={props.post.thumbnailUrl} alt=""/>
        <StyledSpan fontWeight='800'>{props.post.username}</StyledSpan>
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
    </StyledPostContainer>
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