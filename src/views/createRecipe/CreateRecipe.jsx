// import React from "react";
// import { useDispatch } from "react-redux";
// import * as actions from "../../redux/actions";

// const CreateRecipe = () => {
//   const [inputs, setInputs] = React.useState({
//     name: "",
//     pais: "",
//     posición: "",
//     descripción: "",
//     numeroCamiseta: 0,
//     imagen: "",
//     nacimiento: "",
//   });
//   const [errors, setErrors] = React.useState({
//     name: "",
//     pais: "",
//     numeroCamiseta: 0,
//   });

//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setInputs({
//       ...inputs,
//       [e.target.name]: e.target.value,
//     });
//     setErrors(
//       validation({
//         ...inputs,
//         [e.target.name]: e.target.value,
//       })
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (inputs.name.length > 30 || inputs.pais.length > 30) {
//       errors.name = "Nombre u Pais demasiado largo";
//     } else if (inputs.numeroCamiseta < 0) {
//       errors.numeroCamiseta = "El numero de camiseta tiene que ser mayor a 0";
//     } else {
//       dispatch(actions.createFutbolista(inputs));
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="">Name: </label>
//         <input
//           type="text"
//           name="name"
//           onChange={handleChange}
//           value={inputs.name}
//         />
//         {errors.name && <p>{errors.name}</p>}

//         <label htmlFor="">Pais: </label>
//         <input
//           type="text"
//           name="pais"
//           onChange={handleChange}
//           value={inputs.pais}
//         />
//         {errors.pais && <p>{errors.pais}</p>}

//         <label htmlFor="">Posición: </label>
//         <input
//           type="text"
//           name="posición"
//           onChange={handleChange}
//           value={inputs.posición}
//         />
//         <label htmlFor="">Descripción: </label>
//         <textarea
//           name="descripción"
//           id=""
//           cols="30"
//           rows="10"
//           onChange={handleChange}
//           value={inputs.descripción}
//         ></textarea>
//         <label htmlFor="">Numero Camiseta: </label>
//         <input
//           type="number"
//           name="numeroCamiseta"
//           onChange={handleChange}
//           value={inputs.numeroCamiseta}
//         />
//         {errors.numeroCamiseta && <p>{errors.numeroCamiseta}</p>}
//         <label htmlFor="">Imagen: </label>
//         <input
//           type="text"
//           name="imagen"
//           onChange={handleChange}
//           value={inputs.imagen}
//         />
//         <label htmlFor="">Nacimiento: </label>
//         <input
//           type="text"
//           name="nacimiento"
//           onChange={handleChange}
//           value={inputs.nacimiento}
//         />

//         <button type="submit">Crear Jugador</button>
//       </form>
//     </div>
//   );
// };

// export default CreateRecipe;

// const validation = ({ name, pais, numeroCamiseta }) => {
//   const errors = {};
//   if (name.length > 30) errors.name = "Nombre u Pais demasiado largo";
//   if (pais.length > 30) errors.pais = "Nombre u Pais demasiado largo";
//   if (numeroCamiseta < 0)
//     errors.numeroCamiseta = "El numero de camiseta tiene que ser mayor a 0";
//   return errors;
// };
