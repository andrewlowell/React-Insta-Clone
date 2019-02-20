import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div id="searchContainer">
      <div id="searchBar">
        <div className="searchSection">
          <i className="fab fa-instagram"></i>
          <span>|</span>
          <span>Instagram</span>
        </div>
        <div className="searchSection">
          <i className="fas fa-search"></i>
          <input type="text" value={props.searchValue} onChange={props.searchChange} placeholder="Search" />
        </div>
        <div className="searchSection">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>
    </div>
  );
};
 
export default SearchBar;