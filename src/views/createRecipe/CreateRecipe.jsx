import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from "./CreateRecipe.module.css";
import validation from "./validation";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    summary: "",
    healthScore: 0,
    steps: "",
    image: "",
    diets: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: 0,
    image: "",
    diets: [],
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...inputs,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (inputs.name.length > 30 || inputs.pais.length > 30) {
    //   errors.name = "Nombre u Pais demasiado largo";
    // } else if (inputs.numeroCamiseta < 0) {
    //   errors.numeroCamiseta = "El numero de camiseta tiene que ser mayor a 0";
    // } else {
    //   axios.post("http://localhost:3001/recipes/", inputs);
    // }
  };

  return (
    <div className={style.container}>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Go Back!
      </button>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
        />
        <span className={style.span}>{errors.name ? errors.name : ""}</span>

        <label htmlFor="summary">Summary: </label>
        <input
          type="text"
          name="summary"
          onChange={handleChange}
          value={inputs.summary}
        />
        {errors.summary && <p>{errors.summary}</p>}
        <label htmlFor="healthScore">Health Score: </label>
        <input
          type="number"
          name="healthScore"
          onChange={handleChange}
          value={inputs.healthScore}
        />
        {errors.healthScore && <p>{errors.healthScore}</p>}

        <label htmlFor="steps">Steps: </label>
        <input
          type="text"
          name="steps"
          onChange={handleChange}
          value={inputs.steps}
        />
        <label htmlFor="image">Image: </label>
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={inputs.image}
        />
        <label htmlFor="diets">Diets: </label>
        <input
          type="text"
          name="diets"
          onChange={handleChange}
          value={inputs.diets}
        />

        <button type="submit">Save Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
