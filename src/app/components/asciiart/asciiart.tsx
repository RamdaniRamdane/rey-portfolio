import React, { useEffect } from "react";
import { startTyping } from "../../scripts/animatedTyping";
import styles from "./asciiart.module.css";

const TypingAnimation = () => {
  useEffect(() => {
    startTyping(
      "typingText",
      "hello world i am Ramdani Ramdane am born on 2002 , I am a develloper , my blaz is REY , m also an artist and a gym lover etc adbcuaidxbkcsq </br> have a good vibe when u navigate on my portfolio and apreciate it if u are a neovim user :) </br> <h3> > explore </h3> ",
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
