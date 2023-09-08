"use client";
import styles from "../app/page.module.css";

function Btn() {
  const borrarCache = function () {
    localStorage.clear();
  };

  return (
    <div>
      <form>
        <button className={styles.btn} onClick={borrarCache}>
          Try again
        </button>
      </form>
    </div>
  );
}

export default Btn;
