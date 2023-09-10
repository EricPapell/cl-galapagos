"use client";
import styles from "../app/page.module.css";

function Btn({ handleCount }) {
  const borrarCache = function () {
    localStorage.clear();
  };

  return (
    <div>
      <button
        className={styles.btn}
        onClick={() => {
          borrarCache(), handleCount();
        }}
      >
        Empezar de nuevo!
      </button>
    </div>
  );
}

export default Btn;
