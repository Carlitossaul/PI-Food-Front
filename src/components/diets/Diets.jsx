import React from "react";
import style from "./Diets.module.css";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { filterDiets } from "../../redux/actions";

const Diets = () => {
  const dispatch = useDispatch();
  const [selectedTag, setSelectedTag] = useState("");

  const tags = [
    { label: "gluten free", value: "gluten free" },
    { label: "primal", value: "primal" },
    { label: "whole 30", value: "whole 30" },
    { label: "pescatarian", value: "pescatarian" },
    { label: "vegan", value: "vegan" },
    { label: "ketogenic", value: "ketogenic" },
    { label: "dairy free", value: "dairy free" },
    { label: "paleolithic", value: "paleolithic" },
    { label: "lacto ovo vegetarian", value: "lacto ovo vegetarian" },
    { label: "fodmap friendly", value: "fodmap friendly" },
  ];

  const handleTagClick = (tag) => {
    let value = tag.value;
    setSelectedTag(value);
    dispatch(filterDiets(value));
  };

  const renderTags = () => {
    return tags.map((tag, index) => (
      <button
        key={index}
        className={`${style.button} ${
          selectedTag === tag.value ? style.buttonActive : style.buttonOutline
        }`}
        onClick={() => handleTagClick(tag)}
      >
        {tag.label}
      </button>
    ));
  };

  return <div className={style.container}>{renderTags()}</div>;
};

export default Diets;
