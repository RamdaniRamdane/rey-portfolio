import styles from "./title.module.css";

interface TitleProps {
  text: string;
  textColored: string;
}

function Title({ text, textColored }: TitleProps) {
  return (
    <div>
      <h1 className={styles.text}>
        {text} <span className={styles.textColored}>{textColored}</span>
      </h1>
    </div>
  );
}

export default Title;
