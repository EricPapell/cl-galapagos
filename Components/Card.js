"use client";
import Image from "next/image";

import styles from "../app/page.module.css";
import { useState, useEffect } from "react";

function Card({ infoObj, n }) {
  let x = null;
  const [count, setCount] = useState(0);
  const [state, setState] = useState(x);
  const [check, setCheck] = useState(false);
  const [image, setImage] = useState(false);
  useEffect(() => {
    x = JSON.parse(localStorage.getItem(n));
    setState(x);
    setCheck(x);
  }, [count]);
  useEffect(() => {
    localStorage.setItem(n, JSON.stringify(state));
    x = JSON.parse(localStorage.getItem(n));
  }, [state]);

  const handleState = function () {
    !state ? setState(true) : setState(false);
  };
  const handleCheck = function () {
    !check ? setCheck(true) : setCheck(false);
  };
  const handleImage = function () {
    setImage(true);
  };
  const handleImage2 = function () {
    setImage(false);
  };

  if (count === 0) {
    return (
      <div className={styles.containerCard}>
        <button onClick={() => setCount(count + 1)}>CLICK</button>
      </div>
    );
  }
  if (!check && (x === false || x === null)) {
    return (
      <div className={styles.containerCard}>
        <input
          checked={x}
          onChange={() => {
            handleState(), handleCheck();
          }}
          type="checkbox"
        />
        <div className={styles.containerImg}>
          <div className={styles.oculto}>
            <p>?</p>
          </div>
        </div>
        <p>{infoObj.name}</p>
      </div>
    );
  }
  if ((check || x) && !image) {
    return (
      <div className={styles.containerCard}>
        <Image
          onClick={handleImage}
          alt="pic"
          className={styles.Img}
          src={infoObj.img}
        />

        <p>{infoObj.name}</p>
        <div className={styles.author}>
          <p>{infoObj.author[0].props.children}</p>
          <a
            href={infoObj.author[1].props.href}
            title={infoObj.author[1].props.title}
          >
            {infoObj.author[1].props.children}
          </a>
          <p> </p>
          <a href={infoObj.author[2].props.href}>
            {infoObj.author[2].props.children}
          </a>
        </div>
      </div>
    );
  }
  if ((check || x) && image) {
    return (
      <Image
        onClick={handleImage2}
        alt="pic"
        className={styles.Img2}
        src={infoObj.img}
      />
    );
  }
}

export default Card;
