import styles from "./page.module.css";
import Title from "../components/title/title";
import Image from "next/image";

function SkilsDisplay() {
  let skils = [
    "html.svg",
    "css.svg",
    "javascript.svg",
    "python.svg",
    "bash.svg",
    "lua.svg",
    "nodejs.svg",
    "express.svg",
    "nextjs.svg",
    "react.svg",
    "mongodb.svg",
    "postman.svg",
    "linux.svg",
    "docker.svg",
    "git.svg",
    "neovim.svg",
  ];
  skils.map((skil) => (skil = `../../../public/$[skil]`));
  return (
    <div className={styles.gridContainer}>
      {skils.map((skil, index) => (
        <div key={index} className={styles.gridItem}>
          <Image
            src={skil}
            width={60}
            height={60}
            alt="skil"
            className={styles.icon}
          />
        </div>
      ))}
    </div>
  );
}

export default function skils() {
  return (
    <div>
      <Title text="Professional" textColored="Skils" />
      <SkilsDisplay />
    </div>
  );
}
