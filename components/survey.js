import styles from "../styles/survey.module.css";
import Tsag from "../components/icons/tsag";
import Zoos from "../components/icons/zoos";
import { useRouter } from "next/router";
import { useEffect } from "react";

const survey = () => {
  return (
    <div className={`${styles.mainCol} col mx-3 my-2`}>
      <button className="d-flex flex-column">
        <div className={`${styles.header}`}>
          <p className="text-start ms-2">
            Цаxим хэрэглээ болон контент үзэлт контент үзэлт контент үзэлт
          </p>
        </div>
        <div className={`${styles.information} d-flex`}>
          <div
            className={`${styles.medeelel} text-start d-flex flex-column justify-content-end ms-3`}
          >
            <div className={`${styles.hugatsa}`}>
              <p className="fs-4">
                <span>
                  <Tsag></Tsag>
                </span>
                2-3 мин
              </p>
            </div>
            <div className={`${styles.onoo} fs-3`}>
              <p>
                100
                <Zoos />{" "}
              </p>
            </div>
          </div>
          <div
            className={`${styles.zurag} d-flex align-items-center justify-content-center`}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZXIqROGzqrW5mjnVGRGiH1OwM91Y7kZbU0w&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default survey;
