import styles from "../styles/header.module.css";
import Link from "next/link";
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
              <Link href="about">
                <a
                  className={"nav-link" + isActive("/about")}
                  aria-current="page"
                >
                  Бидний тухай
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="surveys">
                <a className={"nav-link" + isActive("/surveys")}>
                  Судалгаанууд
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="gift">
                <a className={"nav-link" + isActive("gift")}>Урамшуулал</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="login">
                <a className={"nav-link" + isActive("login")}>Нэвтрэх</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Login;
