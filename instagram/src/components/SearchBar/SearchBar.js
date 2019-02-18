import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div id="searchBar">
      <div className="searchSection">
        <i class="fab fa-instagram"></i>
        <span>|</span>
        <span>Instagram</span>
      </div>
      <div className="searchSection">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="searchSection">
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
      </div>
    </div>
  );
};
 
export default SearchBar;