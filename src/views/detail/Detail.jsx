// import React from "react";

// const Detail = (props) => {
//   const id = useParams();

//   const dispatch = useDispatch();
//   React.useEffect(() => {
//     dispatch(actions.getFutbolistasDetails(id));
//   }, []);
//   const f = useSelector((state) => state.futbolistaDetail);

//   return (
//     <div className="detail">
//       <h1>{f.name}</h1>
//       <img src={f.imagen} alt={f.name} />
//       <h3>Nacimiento: {f.nacimiento}</h3>
//       <h5>Pais: {f.pais}</h5>
//       <h5>Posición: {f.posición}</h5>
//       <h5>Descripción: {f.descripción}</h5>
//       <h5>Numero Camiseta: {f.numeroCamiseta}</h5>
//     </div>
//   );
// };

// export default Detail;
