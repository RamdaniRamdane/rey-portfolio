import React, { useEffect } from "react";
import { startTyping } from "../../scripts/animatedTyping";
import styles from "./asciiart.module.css";

const TypingAnimation = () => {
  useEffect(() => {
    startTyping(
      "typingText",
      "I'm Ramdani Ramdane, a Linux enthusiast, problem solver, and cybersecurity explorer. I love breaking down systems, optimizing workflows, and decoding structured patterns in data and visuals.",
      100,
    );
  }, []);
  return (
    <div>
      <span id="typingText" className={styles.typingText}></span>
    </div>
  );
};

export default TypingAnimation;
