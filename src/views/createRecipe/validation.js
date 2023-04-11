// const validation = ({ name, pais, numeroCamiseta }) => {
//   const errors = {};
//   if (name.length > 30) errors.name = "Nombre u Pais demasiado largo";
//   if (pais.length > 30) errors.pais = "Nombre u Pais demasiado largo";
//   if (numeroCamiseta < 0)
//     errors.numeroCamiseta = "El numero de camiseta tiene que ser mayor a 0";
//   return errors;
const validation = (inputs) => {
  let errors = {};

  if (inputs.name && inputs.name.length > 30) {
    errors.name = "Name is too long";
  }

  if (inputs.summary && inputs.summary.length > 100) {
    errors.summary = "Summary is too long";
  }

  // ...verificar otras propiedades

  return errors;
};

// };

export default validation;
