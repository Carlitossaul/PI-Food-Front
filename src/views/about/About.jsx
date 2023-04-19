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
            This is an individual integrative project that I developed in order
            to pass the first pass the first instance of the two final projects
            of the bootcamp{" "}
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
            A recipe app to search by name or by diet. Some of its functions are
            recipe creation or combined filters.
          </p>
        </div>
        <h1 className={style.title}>About me</h1>
        <div className={style.info}>
          <p>
            My name is Carlos Lovey and I like to create things that live on the
            internet. I love developing. I enjoy creating projects and watching
            them work.
          </p>
          <p>
            My interest in web development began in my adolescence but I was
            able to dedicate myself to my training just around June 2022 in a
            bootcamp. Simultaneously I have taken courses to complement the path
            of learning, I currently have experience working with the following
            technologies:
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
              Do you want to get in touch? send me a message...
            </h4>
            <div className={style.divButton}>
              <Link
                className={style.link}
                href="javascript:void(0);"
                onClick={handleWhatsapp}
              >
                <img className={style.imgWhats} src={img} alt="" />
                <button className={style.buttonWhats}>
                  Contact via WhatsApp
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
