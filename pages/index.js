import Header from "../components/header";
import Modal from "../components/modal";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={`${styles.main}`}>
      <Header />
      {/* <Modal /> */}
    </div>
  );
}
