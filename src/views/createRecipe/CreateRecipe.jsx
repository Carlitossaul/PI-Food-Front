import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import style from "./CreateRecipe.module.css";
import validation from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, thereWasChange } from "../../redux/actions";
import { toast } from "react-hot-toast";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
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
    if (Object.values(errors).length > 0 || !inputs.diets.length) {
      toast.error("Please fill in all the fields");
    } else {
      e.preventDefault();
      axios.post("/recipes", inputs);
      setInputs({ ...inputs, name: "" });
      dispatch(thereWasChange(true));
      toast.success("Recipe created successfully");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  };
  const handleSelect = (e) => {
    if (!inputs.diets.includes(e.target.value)) {
      setInputs({
        ...inputs,
        diets: [...inputs.diets, e.target.value],
      });
    }
  };

  const handleRemove = (diet) => {
    setInputs({
      ...inputs,
      diets: inputs.diets.filter((d) => d !== diet),
    });
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
        <div className={style.divTitle}>
          <h1 className={style.title}>Creating recipe: {inputs.name} </h1>
        </div>

        <div className={style.divInputs}>
          <label className={style.label} htmlFor="name">
            Name:
          </label>
          <input
            className={style.input}
            type="text"
            name="name"
            onChange={handleChange}
            value={inputs.name}
            placeholder="your recipe name"
            required
          />
          {/* <span className={style.span}>{errors.name ? errors.name : " "}</span> */}

          <label className={style.label} htmlFor="servings">
            Servings:
          </label>
          <input
            className={style.input}
            placeholder="describes how"
            type="number"
            name="servings"
            onChange={handleChange}
            value={inputs.servings}
            required
          />
          <span className={style.span}>
            {/* {errors.servings ? errors.servings : " "} */}
          </span>

          <label className={style.label} htmlFor="healthScore">
            Health Score:{" "}
          </label>
          <input
            className={style.input}
            placeholder="1 to 100 how healthy it is"
            type="number"
            name="healthScore"
            onChange={handleChange}
            value={inputs.healthScore}
          />
          <span className={style.span}>
            {errors.healthScore ? errors.healthScore : " "}
          </span>

          <label className={style.label} htmlFor="readyInMinutes">
            Ready In Minutes:{" "}
          </label>
          <input
            className={style.input}
            placeholder="cooking time"
            type="number"
            name="readyInMinutes"
            onChange={handleChange}
            value={inputs.readyInMinutes}
            required
          />
          <span className={style.span}>
            {/* {errors.readyInMinutes ? errors.readyInMinutes : " "} */}
          </span>

          <label className={style.label} htmlFor="image">
            Image:{" "}
          </label>
          <input
            className={style.input}
            placeholder="enter a URL to the image"
            type="text"
            name="image"
            onChange={handleChange}
            value={inputs.image}
          />
          <span className={style.span}>
            {errors.image ? errors.image : " "}
          </span>

          <div className={style.divImage}>
            <h1 className={style.imageTitle}>Image Preview </h1>
            <img className={style.image} src={inputs.image} alt="" />
          </div>
        </div>

        <div className={style.divTextArea}>
          <label className={style.label} htmlFor="summary">
            Summary:{" "}
          </label>
          <textarea
            className={style.textArea}
            type="text"
            name="summary"
            onChange={handleChange}
            value={inputs.summary}
            placeholder="Write a summary of the recipe"
            required
          />
          <span className={style.span}>
            {/* {errors.summary ? errors.summary : " "} */}
          </span>

          <label className={style.label} htmlFor="steps">
            Steps:{" "}
          </label>
          <textarea
            placeholder="Write the steps to prepare the recipe"
            className={style.textArea}
            type="text"
            name="steps"
            onChange={handleChange}
            value={inputs.steps}
            required
          />
          <span className={style.span}>
            {/* {errors.steps ? errors.steps : " "} */}
          </span>

          <div className={style.dietsContainer}>
            <label htmlFor="diets">Diets:</label>
            <select
              id="diets"
              value={inputs.diets}
              onChange={handleSelect}
              className={style.select}
              required
            >
              {diets.map((diet) => (
                <option key={diet} value={diet}>
                  {diet}
                </option>
              ))}
            </select>
            <div className={style.selectDiets}>
              <h4>Selected Diets:</h4>
              <ul>
                {inputs.diets.map((diet) => (
                  <li key={diet}>
                    {diet}{" "}
                    <button
                      className={style.buttonDiet}
                      type="button"
                      onClick={() => handleRemove(diet)}
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <span className={style.span}>
              {errors.diets ? errors.diets : " "}
            </span>
          </div>
        </div>

        <div className={style.divSubmit}>
          <button className={style.submit} type="submit">
            Save Recipe
          </button>
        </div>
      </form>
      <div className={style.space}></div>
    </div>
  );
};

export default CreateRecipe;
