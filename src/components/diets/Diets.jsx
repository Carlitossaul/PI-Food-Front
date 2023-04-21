import React from "react";
import style from "./Diets.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { filterDiets } from "../../redux/actions";

const Diets = () => {
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState("");

  let diets = useSelector((state) => state.diets);

  const handleTagClick = (diet) => {
    setSelectedTag(diet);
    dispatch(filterDiets(diet));
  };

  const renderTags = () => {
    return (
      diets.length > 0 &&
      diets.map((diet, index) => (
        <button
          key={index}
          className={`${style.button} ${
            selectedTag === diet ? style.buttonActive : style.buttonOutline
          }`}
          onClick={() => handleTagClick(diet)}
        >
          {diet}
        </button>
      ))
    );
  };

  return <div className={style.container}>{renderTags()}</div>;
};

export default Diets;
