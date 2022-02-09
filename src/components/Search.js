import React from "react";

function Search({searchTerm, handleSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
