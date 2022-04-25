import styles from "../styles/login.module.css";

const Login = () => {
  return (
    <div className={`${styles.mainRow} row`}>
      <div
        className={`${styles.ehniiCol}  col d-none d-lg-block d-print-block d-flex justify-content-center align-items-center`}
      ></div>
      <div className={`${styles.hyorCol} col`}>
        <div
          className={`${styles.hyorColContainer} container d-flex  flex-column align-items-center`}
        >
          <h1 className={`${styles.titleBur}`}>Нэвтрэх</h1>
          <input
            type="text"
            className={`${styles.input} form-control mt-5`}
            placeholder="Нэвтрэх нэр"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <input
            type="text"
            className={`${styles.input} form-control mt-3`}
            placeholder="Нууц үг"
            aria-label="Username"
            aria-describedby="basics-addon1"
          />
          <div className="w-100 d-flex justify-content-end mt-1">
            <a href="">Нууц үгээ мартсан?</a>
          </div>
          <button
            type="button"
            className={`${styles.button} ${styles.buttonLogin} btn mt-5`}
          >
            Нэвтрэх
          </button>
          <a href="register">
            <button
              type="button"
              className={`${styles.button} ${styles.buttonRegister} btn mt-3`}
            >
              Бүртгүүлэх
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
