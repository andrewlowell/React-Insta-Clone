import React from 'react';
import styled from 'styled-components';

const StyledSearchContainer = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  overflow: hidden;
  top: 0;
  margin-bottom: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const StyledSearchBar = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchBar = props => {
  return (
    <StyledSearchContainer>
      <StyledSearchBar>
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
      </StyledSearchBar>
    </StyledSearchContainer>
  );
};
 
export default SearchBar;