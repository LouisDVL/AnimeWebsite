import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Search(props) {
  const [searchText, setSearchText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.getSearchResult(searchText);
      }}
    >
      <label>Title of Anime: </label> <br />
      <input
        type="text"
        placeholder="Naruto"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <br />
      <button>Submit</button>
    </form>
  );
}

export default Search;
