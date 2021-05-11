import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { SearchUserWrapper, SearchUserInput } from './SearchUser.style'

const SearchBar = () => {
  return (
    <SearchUserWrapper>
      <FiSearch />
      <SearchUserInput placeholder='Rechercher' />
    </SearchUserWrapper>
  )
}

export default SearchBar
