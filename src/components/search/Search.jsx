import style from "./Search.module.css";
import { useDispatch } from "react-redux";
import { getRecipesByName } from "../../redux/actions";
import React, { useState } from "react";

const Search = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getRecipesByName(name));
    setName("");
  };

  return (
    <div className={style.searchbar}>
      <form className={style.container} onSubmit={handleSearch}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          className={style.inputSearch}
          placeholder="Find a recipe..."
        ></input>
        <div className={style.divButton}>
          <button type="submit" className={style.button}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
