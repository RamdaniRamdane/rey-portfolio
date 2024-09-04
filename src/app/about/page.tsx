"use client";
import styles from "./page.module.css";
import Title from "../components/title/title";
import Image from "next/image";
import reyImg from "../../../public/reyImg.png";
import github from "../../../public/github.svg";
import linkedin from "../../../public/linkedin.svg";
import Json from "../components/toJson/toJson";

export default function about() {
  return (
    <div className={styles.container}>
      <Title text="about" textColored=" rey" />
      <div className={styles.cardContainer}>
        <div className={styles.left}>
          <div className={styles.imageContainer}>
            <Image className={styles.img} src={reyImg} alt="rey" />
          </div>
          <div className={styles.social}>
            <Image src={linkedin} alt="rey" width={20} height={20} />
            <Image src={github} alt="rey" width={20} height={20} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.titleBar}>
            <p>JSON</p>
          </div>
          <div className={styles.json}>
            <Json />
          </div>
        </div>
      </div>
    </div>
  );
}
