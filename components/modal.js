import styles from "../styles/modal.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const Modal = ({ onClose, surveyData }) => {
  return (
    <div
      className={`${styles.modalPop}  modal position-fixed d-flex justify-content-center align-items-center`}
    >
      <div className={`${styles.overlayM} overlay`}></div>
      <div className={`${styles.modalContent}  modal-content ps-5 pe-5 py-5 `}>
        <div className={`${styles.containerr} d-flex`}>
          <div className={`${styles.zurag} `}>
            <img
              className=" ms-3"
              src="https://about.fb.com/wp-content/uploads/2018/01/well-being.png"
              alt=""
            />
          </div>
          <div className={`${styles.informations} w-100 `}>
            <div className={`${styles.btnHeader} d-flex justify-content-end w`}>
              <div
                className={`${styles.closeBtn} btn btn-close`}
                onClick={onClose}
              ></div>
              .
            </div>
            <div className={`${styles.aboutSur} ms-5`}>
              <h1 className="fs-5">
                Цахим хэрэглээ болон контентийн талаар авж буй судалгаа
                {surveyData}.
              </h1>
              <hr />
              <p className="py-2">
                Энэхүү судалгаа нь Монгол улсад оршин суун амьдарч байгаа
                иргэдээс авж буй судалгаа юм.Та бүхэн өөрийн ирээдүйн төлөө
                идэвхтэй үнэн шударгаар судалгаандаа оролцоорой.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
