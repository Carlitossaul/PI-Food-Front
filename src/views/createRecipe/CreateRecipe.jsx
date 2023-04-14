import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from "./CreateRecipe.module.css";
import validation from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiets());
  }, []);
  let diets = useSelector((state) => state.diets);

  const [inputs, setInputs] = useState({
    name: "",
    summary: "",
    healthScore: "",
    servings: "",
    readyInMinutes: "",
    steps: "",
    image: "",
    diets: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    summary: "",
    healthScore: "",
    servings: "",
    readyInMinutes: "",
    steps: "",
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
    axios.post("http://localhost:3001/recipes", inputs);
  };

  return (
    <div className={style.container}>
      <button
        onClick={() => {
          navigate("/home");
        }}
        className={style.button}
      >
        Go Back!
      </button>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.title}>Creating recipe: {inputs.name} </h1>
        <div className={style.containerFormOne}>
          <div className={style.inputContainer}>
            <label className={style.label} htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={inputs.name}
            />
            <span className={style.span}>
              {errors.name ? errors.name : " "}
            </span>

            <label className={style.label} htmlFor="servings">
              Servings:
            </label>
            <input
              type="number"
              name="servings"
              onChange={handleChange}
              value={inputs.servings}
            />
            <span className={style.span}>
              {errors.servings ? errors.servings : " "}
            </span>

            <label className={style.label} htmlFor="healthScore">
              Health Score:{" "}
            </label>
            <input
              type="number"
              name="healthScore"
              onChange={handleChange}
              value={inputs.healthScore}
            />
            <span className={style.span}>
              {errors.name ? errors.name : " "}
            </span>

            <label className={style.label} htmlFor="readyInMinutes">
              readyInMinutes:{" "}
            </label>
            <input
              type="number"
              name="readyInMinutes"
              onChange={handleChange}
              value={inputs.readyInMinutes}
            />

            <span className={style.span}>
              {errors.name ? errors.name : " "}
            </span>
            <label className={style.label} htmlFor="image">
              Image:{" "}
            </label>
            <input
              type="text"
              name="image"
              onChange={handleChange}
              value={inputs.image}
            />
            <span className={style.span}>
              {errors.image ? errors.image : " "}
            </span>
            <label className={style.label} htmlFor="diets">
              Diets:{" "}
            </label>
            <select
              name="diets"
              id="diets"
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  diets: [...inputs.diets, e.target.value],
                })
              }
            >
              {diets.length &&
                diets.map((diet) => {
                  return <option value={diet}>{diet}</option>;
                })}
            </select>
          </div>

          <div className={style.containerFormTwo}>
            <div className={style.containerTextArea}>
              <div className={style.divTextArea}>
                <label className={style.label} htmlFor="summary">
                  Summary:{" "}
                </label>
                <textarea
                  type="text"
                  name="summary"
                  onChange={handleChange}
                  value={inputs.summary}
                />
                <span className={style.span}>
                  {errors.name ? errors.name : " "}
                </span>
              </div>
              <div className={style.divTextArea}>
                <label className={style.label} htmlFor="steps">
                  Steps:{" "}
                </label>
                <textarea
                  type="text"
                  name="steps"
                  onChange={handleChange}
                  value={inputs.steps}
                />
                <span className={style.span}>
                  {errors.name ? errors.name : " "}
                </span>
              </div>
            </div>
            <div className={style.containerImage}>
              <h1>Image Preview </h1>
              <img className={style.image} src={inputs.image} alt="" />
            </div>
          </div>
        </div>
        <div className={style.divImage}>
          <button type="submit">Save Recipe</button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipe;
