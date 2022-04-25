import Header from "../components/header";
import styles from "../styles/surveys.module.css";
import Survey from "../components/survey";

const Surveys = () => {
  return (
    <div>
      <Header />
      <div className={`${styles.mainContainer} container-fluid px-5 `}>
        <div className="addSurvey d-flex justify-content-end">
          <div className="pt-3">
            <div className={`${styles.addSurveyBtn} btn btn-sm border`}>
              + СУДАЛГАА НЭМЭХ{" "}
            </div>
          </div>
          <p className="p-3">
            Таны үлдэгдэл оноо: <span>247,000</span>
          </p>
        </div>
        <div className="container-fluid mx-5 px-5">
          <div className="row">
            <div
              className={`${styles.filter} row border-end d-none d-lg-block d-print-block`}
            >
              <div className={`${styles.filterbackground}`}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label">Default checkbox</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label">Default checkbox</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label">Default checkbox</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label">Default checkbox</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label">Default checkbox</label>
                </div>
              </div>
            </div>
            <div className={`col`}>
              <div className={`container-fluid mx-5`}>
                <div className="row row-cols-3">
                  <Survey />
                  <Survey />
                  <Survey />
                  <Survey />
                  <Survey />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surveys;
