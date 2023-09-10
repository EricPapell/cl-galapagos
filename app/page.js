"use client";
import Image from "next/image";
import Btn from "@/Components/Button";
import styles from "./page.module.css";
import Card from "@/Components/Card";

import { useState, useEffect } from "react";

import logo from "../public/images/turtle.png";
import albatro from "../public/images/albatross.jpg";
import azul from "../public/images/patiazul.jpg";
import nazca from "../public/images/nazca.jpg";
import rojo from "../public/images/patirojo.jpg";
import flightless from "../public/images/flightless.jpg";
import flamenco from "../public/images/flamenco.jpg";
import fragata from "../public/images/fragata.jpg";
import hawk from "../public/images/hawk.jpg";
import terrestre from "../public/images/terrestre.jpg";
import marina from "../public/images/marina.jpg";
import fe from "../public/images/fe.jpeg";
import pingu from "../public/images/pingu.jpg";
import sealion from "../public/images/sealion.jpg";
import fur from "../public/images/fur.jpg";
import tortuga from "../public/images/tortuga.jpg";

const info = [
  {
    img: albatro,
    name: "Galápagos Albatross",
    index: 0,
    author: [
      <p>"De wayfaring stranger - flickr.com"</p>,
      <a
        href="https://creativecommons.org/licenses/by-sa/2.0"
        title="Creative Commons Attribution-Share Alike 3.0"
      >
        CC BY 2.0
      </a>,
      <a href="https://commons.wikimedia.org/w/index.php?curid=666068">
        Enlace
      </a>,
    ],
  },
  {
    img: azul,
    name: "Blue-footed Boby",
    index: 1,
    author: [
      <p>"De Benjamint444 - Trabajo propio, GFDL 1.2"</p>,
      <a></a>,
      <a href="https://commons.wikimedia.org/w/index.php?curid=26540141">
        Enlace
      </a>,
    ],
  },
  {
    img: nazca,
    name: "Nazca Booby",
    index: 2,
    author: [
      <p>"By Benjamint444 - Own work, GFDL 1.2"</p>,
      <a></a>,
      <a href="https://commons.wikimedia.org/w/index.php?curid=13334503">
        Enlace
      </a>,
    ],
  },
  {
    img: rojo,
    name: "Red-footed Boby",
    index: 3,
    author: [
      <p>
        "De Gregg Yan - Low resolution derivative work from original photograph
        personally provided by photographer."
      </p>,
      <a
        href="https://creativecommons.org/licenses/by-sa/3.0"
        title="Creative Commons Attribution-Share Alike 3.0"
      >
        CC BY-SA 3.0
      </a>,
      <a href="https://commons.wikimedia.org/w/index.php?curid=19776749">
        Enlace
      </a>,
    ],
  },
  {
    img: flightless,
    name: "Flightless Cormorant",
    index: 4,
    author: [
      <p>"By &lt"</p>,
      <a
        href="https://creativecommons.org/licenses/by-sa/2.0"
        title="Creative Commons Attribution-Share Alike 2.0"
      >
        CC BY-SA 2.0
      </a>,
      <a href="https://commons.wikimedia.org/w/index.php?curid=3877577">
        Link
      </a>,
    ],
  },
  {
    img: flamenco,
    name: "American Flamingo",
    index: 5,
    author: [<p></p>, <a></a>, <a></a>],
  },
  {
    img: fragata,
    name: "Frigatebirds",
    index: 6,
    author: [<p></p>, <a></a>, <a></a>],
  },
  {
    img: hawk,
    name: "Galapágos Hawk",
    index: 7,
    author: [
      <p>"By Bernard Gagnon - Own work"</p>,
      <a
        href="https://creativecommons.org/licenses/by-sa/3.0"
        title="Creative Commons Attribution-Share Alike 3.0"
      >
        CC BY-SA 3.0
      </a>,
      <a href="https://commons.wikimedia.org/w/index.php?curid=107414651">
        Enlace
      </a>,
    ],
  },
  {
    img: terrestre,
    name: "Land Iguana",
    index: 8,
    author: [<p></p>, <a></a>, <a></a>],
  },
  {
    img: marina,
    name: "Marine Iguana",
    index: 9,
    author: [<p></p>, <a></a>, <a></a>],
  },
  {
    img: fe,
    name: "Santa Fe Iguana",
    index: 10,
    author: [
      <p>"De &lt"</p>,
      <a
        href="https://creativecommons.org/licenses/by/3.0"
        title="Creative Commons Attribution 3.0"
      >
        CC BY 3.0
      </a>,
      <a href="https://commons.wikimedia.org/w/index.php?curid=11069263">
        Enlace
      </a>,
    ],
  },
  {
    img: pingu,
    name: "Galápagos Penguin",
    index: 11,
    author: [<p></p>, <a></a>, <a></a>],
  },
  {
    img: sealion,
    name: "Galápagos Sea Lion",
    index: 12,
    author: [<p></p>, <a></a>, <a></a>],
  },
  {
    img: fur,
    name: "Galápagos Fur Lion",
    index: 13,
    author: [<p></p>, <a></a>, <a></a>],
  },
  {
    img: tortuga,
    name: "Galápagos Giant Tortoise",
    index: 14,
    author: [<p></p>, <a></a>, <a></a>],
  },
];

export default function Home() {
  const [count, setCount] = useState(0);
  const handleCount = function () {
    setCount(count + 1);
  };

  if (count === 0) {
    return (
      <main className={styles.main}>
        <div className={styles.tittle}>
          <h1>CHECK LIST DE GALAPAGOS!</h1>
          <Image alt="pic" className={styles.logo} src={logo} />
        </div>
        <div className={styles.container}>
          <div className={styles.containerBtn}>
            <button
              className={styles.btnMemory}
              onClick={() => setCount(count + 1)}
            >
              {" "}
              Reempezar donde lo dejaste!
            </button>
            <Btn handleCount={handleCount} />
          </div>
        </div>
      </main>
    );
  }
  if (count === 1) {
    return (
      <main className={styles.main}>
        <div className={styles.tittle}>
          <h1>CHECK LIST DE GALAPAGOS!</h1>
          <Image alt="pic" className={styles.logo} src={logo} />
        </div>
        <div className={styles.container}>
          {info.map((el, i) => {
            return <Card key={i} n={i} infoObj={el} count={count} />;
          })}
        </div>
      </main>
    );
  }
}
