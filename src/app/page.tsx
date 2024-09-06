"use client";
import reyVimImg from "../../public/narutopxl.png";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import TypingAnimation from "./components/asciiart/asciiart";

export default function Home() {
  return (
    <div className={styles.dispayContainer}>
      <div className={styles.reyVimImgContainer}>
        <Image src={reyVimImg} alt="" className={styles.reyVimImg} />
      </div>
      <div className={styles.card}>
        <TypingAnimation />
      </div>
      <p>keybind : press t to toggle the nvim-tree</p>
    </div>
  );
}
