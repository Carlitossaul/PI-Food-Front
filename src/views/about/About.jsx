import style from "./About.module.css";
import { useNavigate, Link } from "react-router-dom";
import img from "../../helper/whatsapp.png";

const handleWhatsapp = () => {
  window.open("https://api.whatsapp.com/send?phone=3704988894");
};

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div className={style.about}>
      <div className={style.container}>
        <button
          className={style.button}
          onClick={() => {
            navigate("/home");
          }}
        >
          Go Back!
        </button>
        <h1 className={style.title}>About this website</h1>
        <div className={style.info}>
          <p>
            Este es un proyecto individual integrador que desarrolle para
            aprobar la primera instancia de los dos proyectos finales del
            bootcamp{" "}
            <Link
              className={style.henryLink}
              target="_blank"
              to={"https://www.soyhenry.com/"}
            >
              Henry
            </Link>
            .
          </p>
          <p>
            Una app de recetas para buscar por nombre o por dietas. Algunas de
            sus funciones son creacion de recetas o filtros combinados.
          </p>
        </div>
        <h1 className={style.title}>About me</h1>
        <div className={style.info}>
          <p>
            Mi nombre es Carlos Lovey y me gusta crear cosas que viven en
            internet. Me encanta desarrollar. Disfruto crear proyectos y verlos
            trabajando.
          </p>
          <p>
            Mi interes por el desarrollo web se gesto en mi adolescencia pero
            pude dedicarme a mi formacion recien alla por junio de 2022 en un
            bootcamp. En simultaneo he hecho cursos para complementar la ruta de
            aprendizaje, actualmente tengo experiencia trabajando con las
            siguientes tecnologias:
          </p>
        </div>
        <div className={style.tecnologias}>
          <table className={style.table}>
            <tr>
              <td>
                <li>Html</li>
              </td>
              <td>
                <li>React</li>
              </td>
            </tr>
            <tr>
              <td>
                <li>CSS</li>
              </td>
              <td>
                <li>Redux</li>
              </td>
            </tr>
            <tr>
              <td>
                <li>Bootstrap</li>
              </td>
              <td>
                <li>Git</li>
              </td>
            </tr>
            <tr>
              <td>
                <li>Javascript (ES6+)</li>
              </td>
              <td>
                <li>Github</li>
              </td>
            </tr>
            <tr>
              <td>
                <li>Express</li>
              </td>
              <td>
                <li>Sequelize</li>
              </td>
            </tr>
            <tr>
              <td>
                <li>Postgresql</li>
              </td>
            </tr>
          </table>
        </div>
        <div className={style.info}>
          <div className={style.contacto}>
            <h4 className={style.subTitle}>
              Quieres ponerte en contacto? enviame un mensaje...
            </h4>
            <div className={style.divButton}>
              <Link
                className={style.link}
                href="javascript:void(0);"
                onClick={handleWhatsapp}
              >
                <img className={style.imgWhats} src={img} alt="" />
                <button className={style.buttonWhats}>
                  Contactar por WhatsApp
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
