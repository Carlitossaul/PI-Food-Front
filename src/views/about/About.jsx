import style from "./About.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Detail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <h1 className={style.title}>Contact</h1>
        <div className={style.links}>
          <a
            target="_blank"
            className={style.link}
            href="https://www.linkedin.com/in/carloslovey"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={style.icon} />
            LinkedIn:My professional profile on LinkedIn, where you can find
            information about my work experience and skills. Click here!
          </a>
          <a
            target="_blank"
            className={style.link}
            href="https://github.com/Carlitossaul"
            rel="noopener noreferrer"
          >
            <GoMarkGithub className={style.icon} />
            GitHub: "My GitHub profile, where I share some of my projects and
            collaborations with the developer community. Click here!
          </a>
          <a
            target="_blank"
            className={style.link}
            href="https://carloslovey.vercel.app/"
            rel="noopener noreferrer"
          >
            <BsBoxArrowUpRight className={style.icon} />
            Portfolio: My portfolio of projects, where you can see some of the
            work I have done and my work style. Click here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
