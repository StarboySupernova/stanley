import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchFieldStyles } from '../../styles/search/SearchFieldStyles';

function SearchField({ value, setValue, onFocus }) {
  return (
    <SearchFieldStyles>
      <input
        type="text"
        placeholder="Search Stanley Outdoor & Landscaping"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={onFocus && onFocus}
      />
      <FiSearch className="searchIcon" />
    </SearchFieldStyles>
  );
}

export default SearchField;
