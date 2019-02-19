import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      commentValue: '',
      dummyData: dummyData
    };
  }

  searchChange = e => {
    this.setState({searchValue: e.target.value});
    this.setState({dummyData: this.state.dummyData.map(item => {
      let newItem = {
        username: item.username,
        thumbnailUrl: item.thumbnailUrl,
        imageUrl: item.imageUrl,
        likes: item.likes,
        timestamp: item.timestamp,
        comments: item.comments
      };
      if (e.target.value === '' || item.username.includes(e.target.value)) {
        newItem.display = true;
      }
      else {
        newItem.display = false;
      }
      return newItem;
    })});
  }

  commentChange = e => {
    this.setState({commentValue: e.target.value});
  }

  addComment = (post, event) => {
    event.preventDefault();
    let withNewComment = {
      username: post.username,
      thumbnailUrl: post.thumbnailUrl,
      imageUrl: post.imageUrl,
      likes: post.likes,
      timestamp: post.timestamp,
      comments: post.comments.push({username: 'joe_bob_mcgee', text: this.state.commentValue})
    };
    this.setState({
      dummyData: [...this.state.dummyData, withNewComment],
      commentValue: ''
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchChange={this.searchChange} searchValue={this.state.searchValue} />
        {this.state.dummyData.map((item, index) => {
          if (item.display) {
            return <PostContainer post={item} key={index} commentValue={this.state.commentValue} commentChange={this.commentChange} addComment={this.addComment} />;
          }
        })}
      </div>
    );
  }
}

export default App;
