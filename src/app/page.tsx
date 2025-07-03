"use client";
import reyVimImg from "../../public/narutopxl.png";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import TypingAnimation from "./components/asciiart/asciiart";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);
  return (
    <div className={styles.dispayContainer}>
      <div className={styles.reyVimImgContainer}>
        <Image src={reyVimImg} alt="" className={styles.reyVimImg} />
      </div>
      <div className={styles.card}>
        <TypingAnimation />
      </div>
    </div>
  );
}
