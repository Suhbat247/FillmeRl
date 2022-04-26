import styles from "../styles/survey.module.css";
import Tsag from "../components/icons/tsag";
import Zoos from "../components/icons/zoos";
import Tsagiinzuu from "./icons/tsaginZuu";
const survey = () => {
  return (
    <div className={`${styles.mainCol} col mx-3 my-2`}>
      <button type="button" data-bs-toggle="modal" data-bs-targer="#myModal">
        <div className={`${styles.header}`} id="myModal">
          <p className="mt-1">
            Цаxим хэрэглээ болон Цаxим хэрэглээ болон контент үзэлт
          </p>
        </div>
        <div className={`${styles.about} d-flex `}>
          <div
            className={`${styles.information} ms-3 d-flex flex-column justify-content-end align-items-start`}
          >
            <div className={`${styles.hugatsa}`}>
              <p className="fw-light">
                <span>
                  <Tsag></Tsag>
                </span>{" "}
                5-10 мин
              </p>
            </div>
            <div className={`onoo fs-2`}>
              <p>
                100
                <span>
                  <Zoos />
                </span>
              </p>
            </div>
          </div>
          <div
            className={`${styles.zurag} d-flex justify-content-center align-items-center`}
          >
            <img
              src="https://visme.co/blog/wp-content/uploads/2020/03/Header-1200.png"
              alt=""
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default survey;
