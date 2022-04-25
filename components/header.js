import styles from "../styles/header.module.css";
import { useRouter } from "next/dist/client/router";

const Login = () => {
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) return " active";
    else return "";
  };

  return (
    <nav
      id={styles.navbar}
      className="navbar navbar-expand-lg navbar-light border-bottom"
    >
      <div className="container-fluid px-5 py-2 mx-5 ">
        <a className="navbar-brand fw-bold " href="#">
          Fillme
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapsecollapse" id="navbarSupportedContent">
          <ul id={styles.ulul} className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={"nav-link" + isActive("/about")}
                aria-current="page"
                href="about"
              >
                Бидний тухай
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link" + isActive("/surveys")} href="surveys">
                Судалгаанууд
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link" + isActive("gift")} href="gift">
                Урамшуулал
              </a>
            </li>
            <li className="nav-item">
              <a className={"nav-link" + isActive("login")} href="login">
                Нэвтрэх
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Login;
