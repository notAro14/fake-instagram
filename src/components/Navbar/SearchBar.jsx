import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchBarContainer, SearchBarInput } from './Navbar.style';

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <FiSearch />
      <SearchBarInput placeholder="Rechercher" />
    </SearchBarContainer>
  );
};

export default SearchBar;
