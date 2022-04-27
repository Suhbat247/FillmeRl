import styles from "../styles/register.module.css";
import { useState } from "react";
const register = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className={`${styles.mainRow} row`}>
      <div
        className={`${styles.ehniiCol}  col d-none d-lg-block d-print-block d-flex justify-content-center align-items-center`}
      ></div>
      <div className={`${styles.hyorCol} col`}>
        <div
          id="step1"
          style={tab === 0 ? { display: "block" } : { display: "none" }}
        >
          <div
            className={`${styles.progresstionDot} container d-flex flex-column align-items-center `}
          >
            <h1 className={`${styles.burtTitle}`}>БҮРТГҮҮЛЭХ </h1>
            <div
              className={`${styles.progressDot} d-flex justify-content-between mt-5 pt-3`}
            >
              <div
                className={`${styles.nextDot} d-flex flex-column align-items-center`}
              >
                <div className={`${styles.dot} ${styles.dotBorderPad} `}></div>
                <div
                  className={`${styles.dotTitle}  fs-6 fw-light text-lowercase`}
                >
                  <p className={` fs-6`}>БҮРТГЭЛИЙН МЭДЭЭЛЭЛ</p>
                </div>
              </div>
              <div
                className={`${styles.nextDot} d-flex flex-column align-items-center`}
              >
                <div className={`${styles.dot} `}></div>
                <div
                  className={`${styles.dotTitle} fs-6 fw-light text-lowercase`}
                >
                  <p className={` fs-6`}>ХУВИЙН МЭДЭЭЛЭЛ</p>
                </div>
              </div>
              <div
                className={`${styles.nextDot} d-flex flex-column align-items-center `}
              >
                <div className={`${styles.dot} `}></div>
                <div
                  className={`${styles.dotTitle} fs-6 fw-light text-lowercase`}
                >
                  <p className={` fs-6`}>ТАНЫ МЭДЭЭЛЭЛ</p>
                </div>
              </div>
            </div>
            <div className={`${styles.colContainer} row mt-3 row-cols-2`}>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>НЭВТРЭХ НЭР</div>
                <input
                  type="text"
                  name="username"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                  id="username"
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>И-МЭЙЛ</div>
                <input
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>НУУЦ ҮГ</div>
                <input
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>И-МЭЙЛ БАТАЛГААЖУУЛАХ</div>
                <input
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>НУУЦ ҮГ БАТАЛГААЖУУЛАХ</div>
                <input
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                />
              </div>
            </div>
            <div
              className={`${styles.nextBtn} btn d-flex justify-content-center align-items-center mt-5`}
              onClick={() => setTab(1)}
            >
              ОРУУЛАХ
            </div>
          </div>
          <div className="d-flex  justify-content-center align-items-center  h-25"></div>
        </div>

        <div
          id="step2"
          style={tab === 1 ? { display: "block" } : { display: "none" }}
        >
          <div
            className={`${styles.progresstionDot} container d-flex flex-column align-items-center `}
          >
            <h1 className={`${styles.burtTitle}`}>БҮРТГҮҮЛЭХ </h1>
            <div
              className={`${styles.progressDot} d-flex justify-content-between mt-5 pt-3`}
            >
              <div
                className={`${styles.nextDot} d-flex flex-column align-items-center`}
              >
                <div className={`${styles.dot} `}></div>
                <div
                  className={`${styles.dotTitle} ${styles.dotTitleUrt} fs-6 fw-light text-lowercase`}
                >
                  <p className={` fs-6`}>БҮРТГЭЛИЙН МЭДЭЭЛЭЛ</p>
                </div>
              </div>
              <div
                className={`${styles.nextDot} d-flex flex-column align-items-center`}
              >
                <div className={`${styles.dot} ${styles.dotBorderPad}`}></div>
                <div
                  className={`${styles.dotTitle} fs-6 fw-light text-lowercase`}
                >
                  <p className={` fs-6`}>ХУВИЙН МЭДЭЭЛЭЛ</p>
                </div>
              </div>
              <div
                className={`${styles.nextDot} d-flex flex-column align-items-center `}
              >
                <div className={`${styles.dot}`}></div>
                <div
                  className={`${styles.dotTitle} fs-6 fw-light text-lowercase`}
                >
                  <p className={` fs-6`}>ТАНЫ МЭДЭЭЛЭЛ</p>
                </div>
              </div>
            </div>
            <div className={`${styles.colContainer} row mt-3 row-cols-2`}>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}> ОВОГ</div>
                <input
                  type="text"
                  name="lastname"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                  id="lastname"
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>НЭР</div>
                <input
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>УТАСНЫ ДУГААР </div>
                <input
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className="row">
                  <div className="col">
                    <div className={` titleInput`}>НУУЦ ҮГ</div>
                    <input
                      type="text"
                      className={`${styles.registerInputBogino} form-control`}
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="col">
                    <div className={` titleInput`}>НУУЦ ҮГ</div>
                    <input
                      type="text"
                      className={`${styles.registerInputBogino} form-control`}
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="buttonContainer d-flex">
              <div
                className={`${styles.nextBtn} me-2 btn d-flex justify-content-center align-items-center mt-5`}
                onClick={() => setTab(0)}
              >
                БУЦАХ
              </div>
              <div
                className={`${styles.nextBtn} btn d-flex justify-content-center align-items-center mt-5`}
                onClick={() => setTab(2)}
              >
                ls ОРУУЛАХ
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-center align-items-center  h-25"></div>
        </div>

        <div
          id="step3"
          style={tab === 2 ? { display: "block" } : { display: "none" }}
        >
          <div
            className={`${styles.progresstionDot} container d-flex flex-column align-items-center `}
          >
            <h1 className={`${styles.burtTitle}`}>БҮРТГҮҮЛЭХ </h1>
            <div
              className={`${styles.progressDot} d-flex justify-content-between mt-5 pt-3`}
            >
              <div
                className={`${styles.nextDot} d-flex flex-column align-items-center`}
              >
                <div className={`${styles.dot} `}></div>
                <div
                  className={`${styles.dotTitle} ${styles.dotTitleUrt} fs-6 fw-light text-lowercase`}
                >
                  <p className={` fs-6`}>БҮРТГЭЛИЙН МЭДЭЭЛЭЛ</p>
                </div>
              </div>
              <div
                className={`${styles.nextDot} d-flex flex-column align-items-center`}
              >
                <div className={`${styles.dot} `}></div>
                <div
                  className={`${styles.dotTitle} fs-6 fw-light text-lowercase`}
                >
                  <p className={` fs-6`}>ХУВИЙН МЭДЭЭЛЭЛ</p>
                </div>
              </div>
              <div
                className={`${styles.nextDot} d-flex flex-column align-items-center `}
              >
                <div className={`${styles.dot} ${styles.dotBorderPad}`}></div>
                <div
                  className={`${styles.dotTitle} fs-6 fw-light text-lowercase`}
                >
                  <p className={` fs-6`}>ТАНЫ МЭДЭЭЛЭЛ</p>
                </div>
              </div>
            </div>
            <div className={`${styles.colContainer} row mt-3 row-cols-2`}>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>НЭВТРЭХ НЭР</div>
                <input
                  disabled
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>И-МЭЙЛ</div>
                <input
                  disabled
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>НУУЦ ҮГ</div>
                <input
                  disabled
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className="row">
                  <div className="col">
                    <div className={` titleInput`}>НУУЦ ҮГ</div>
                    <input
                      disabled
                      type="text"
                      className={`${styles.registerInputBogino} form-control`}
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="col">
                    <div className={` titleInput`}>НУУЦ ҮГ</div>
                    <input
                      disabled
                      type="text"
                      className={`${styles.registerInputBogino} form-control`}
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>НЭВТРЭХ НЭР</div>
                <input
                  disabled
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>И-МЭЙЛ</div>
                <input
                  disabled
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>НУУЦ ҮГ</div>
                <input
                  disabled
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className={`${styles.rowColWidth} col mt-3`}>
                <div className={` titleInput`}>РЕГИСТЭР *</div>
                <input
                  disabled
                  type="text"
                  className={`${styles.registerInput} form-control`}
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="buttonContainer d-flex">
              <div
                className={`${styles.nextBtn} me-2 btn d-flex justify-content-center align-items-center mt-5`}
                onClick={() => setTab(1)}
              >
                БУЦАХ
              </div>
              <div
                className={`${styles.nextBtn} btn d-flex justify-content-center align-items-center mt-5`}
                onClick={() => setTab(2)}
              >
                БҮРТГҮҮЛЭХ
              </div>
            </div>
          </div>
          <div className="d-flex  justify-content-center align-items-center  h-25"></div>
        </div>
      </div>
    </div>
  );
};

export default register;
