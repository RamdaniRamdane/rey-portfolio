"use client";
import { useCallback, useEffect, useState } from "react";
import styles from "./linecouter.module.css";
import { useWindowSize } from "usehooks-ts";

export default function LineCounter() {

  const [nums, setNums] = useState([1]);
  const { height = 0 } = useWindowSize()
  
  const handleNums = useCallback(() => {
    let nbLines = (height - 15) / 14;
    let arr = [];
    for (let i = 1; i <= Math.ceil(nbLines); i++) {
      arr.push(i);
    }
    setNums(arr);
  },[setNums , height])

  useEffect(()=>{
      handleNums()
  },[handleNums])

  return (
    <>
      <div id="line" className={styles.lineCounter}>
        {nums.map((num, index) => (
          <p key={index}>{num}</p>
        ))}
      </div>
    </>
  );
}
