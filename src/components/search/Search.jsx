import style from "./Search.module.css";

import { useState } from "react";

const Search = ({ onSearch }) => {
  const [character, setCharacter] = useState("");

  const handleChange = (e) => {
    setCharacter(e.target.value);
  };

  const handleClick = () => {
    onSearch(character);
    setCharacter("");
  };

  return (
    <div className={style.searchbar}>
      <div className={style.container}>
        <input
          type="text"
          value={character}
          onChange={handleChange}
          className={style.inputSearch}
          placeholder="Search a recipe..."
        ></input>
        <div className={style.divButton}>
          <button className={style.button} onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
