import styles from "./page.module.css";
import Title from "../components/title/title";
import Image from "next/image";

function SkilsDisplay() {
  let skils = [
    "html.svg",
    "python.svg",
    "javascript.svg",
    "linux.svg",
    "css.svg",
    "bash.svg",
    "lua.svg",
    "nodejs.svg",
    "express.svg",
    "nextjs.svg",
    "mongodb.svg",
    "git.svg",
    "postman.svg",
    "neovim.svg",
    "react.svg",
    "docker.svg",
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
