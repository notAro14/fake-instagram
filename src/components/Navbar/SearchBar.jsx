import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchBarWrapper, SearchBarInput } from './Navbar.style';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <FiSearch />
      <SearchBarInput placeholder="Rechercher" />
    </SearchBarWrapper>
  );
};

export default SearchBar;
