import { useDispatch, useSelector } from "react-redux";
import { getRecipesByName } from "../../redux/actions";
import React, { useEffect, useState } from "react";
import style from "./SearchBar.module.css";
import img from "../../helper/searchicon.png";

const SearchBar = () => {
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
          className={style.input}
          placeholder="5000+ Recipes"
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

export default SearchBar;
