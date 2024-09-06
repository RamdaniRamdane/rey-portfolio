"use client";
import styles from "./page.module.css";
import Title from "../components/title/title";
import Image from "next/image";
import reyImg from "../../../public/reyImg.png";
import github from "../../../public/github.svg";
import cv from "../../../public/cv.svg";
import Json from "../components/toJson/toJson";

export default function about() {
  return (
    <div className={styles.container}>
      <Title text="About" textColored=" Me" />
      <div className={styles.cardContainer}>
        <div className={styles.left}>
            <div className={styles.imageText}>
                <div className={styles.imageContainer}>
                    <Image className={styles.img} src={reyImg} alt="rey" />
                </div>
                <div className={styles.textContainer}>
                    <h1>Hi &#128075;</h1>
                    <h3>i am Rey</h3>
                    <p>please dont look a lot on my pic and i use Arch btw ...</p>
                </div>
            </div>
            
            <div className={styles.CvGit}>
                <div className={styles.Cv}>
                    <Image src={cv} alt="cv" width={100} height={100} />
                </div> 
                <div className={styles.Git}>
                    <Image src={github} alt="git" width={100} height={100} />
                </div>
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
