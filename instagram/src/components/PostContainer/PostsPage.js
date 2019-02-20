import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

const PostsPage = props => {
  return (
    <div className="postsPage">
      <SearchBar searchChange={props.searchChange} searchValue={props.searchValue} />
      <div id="postsContainer">
        {props.dummyData.map((item, index) => {
          if (item.display) {
            return <PostContainer post={item} key={index} commentValue={props.commentValue} commentChange={props.commentChange} addComment={props.addComment} like={props.like} />;
          }
        })}
      </div>
    </div>
  );
}
 
export default PostsPage;