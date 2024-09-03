import styles from "./page.module.css";
import Title from "../components/title/title";
import Image from "next/image"
import reyImg from "../../../public/reyImg.png"
import github from "../../../public/github.svg"
import linkedin from "../../../public/linkedin.svg"


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
                 <Image  src={linkedin} alt="rey" width={20} height={20}  /> 
                 <Image  src={github} alt="rey" width={20} height={20}  /> 
              </div>
          </div>
          <div className={styles.right}>
                <div className={styles.titleBar}> 
                <p>JSON</p>
                </div>
                <div className={styles.json}>
                    <span style={{color: '#E6B673'}}>&#123;</span> &#34;<span style={{color:'#FF8F40', fontWeight:'bold'}}>name</span>&#34;:&#34;<span style={{color:'#AAD94C' , fontWeight:'bold'}}>rey</span>&#34; <span style={{color: '#E6B673'}}>&#125;</span>
                </div>
          </div>
      </div>
    </div>
  );
}


