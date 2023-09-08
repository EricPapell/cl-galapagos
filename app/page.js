import Image from "next/image";
import Btn from "@/Components/Button";
import styles from "./page.module.css";
import Card from "@/Components/Card";
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
  },
  {
    img: azul,
    name: "Blue-footed Boby",
    index: 1,
  },
  {
    img: nazca,
    name: "Nazca Booby",
    index: 2,
  },
  {
    img: rojo,
    name: "Red-footed Boby",
    index: 3,
  },
  {
    img: flightless,
    name: "Flightless Cormorant",
    index: 4,
  },
  {
    img: flamenco,
    name: "American Flamingo",
    index: 5,
  },
  {
    img: fragata,
    name: "Frigatebirds",
    index: 6,
  },
  {
    img: hawk,
    name: "Galapágos Hawk",
    index: 7,
  },
  {
    img: terrestre,
    name: "Land Iguana",
    index: 8,
  },
  {
    img: marina,
    name: "Marine Iguana",
    index: 9,
  },
  {
    img: fe,
    name: "Santa Fe Iguana",
    index: 10,
  },
  {
    img: pingu,
    name: "Galápagos Penguin",
    index: 11,
  },
  {
    img: sealion,
    name: "Galápagos Sea Lion",
    index: 12,
  },
  {
    img: fur,
    name: "Galápagos Fur Lion",
    index: 13,
  },
  {
    img: tortuga,
    name: "Galápagos Giant Tortoise",
    index: 14,
  },
];

export default function Home() {
  // localStorage.clear();

  return (
    <main className={styles.main}>
      <div className={styles.tittle}>
        <h1>CHECK LIST DE GALAPAGOS!</h1>
        <Image alt="pic" className={styles.logo} src={logo} />
      </div>
      <div className={styles.container}>
        {info.map((el, i) => {
          return <Card key={i} n={i} infoObj={el} />;
        })}
        <Btn />
      </div>
    </main>
  );
}
