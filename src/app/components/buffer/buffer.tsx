"use client";
import styles from "./buffer.module.css";
import { useMediaQuery } from "usehooks-ts"
import gitImage from "../../../../public/gitCat.png"
import Image from "next/image"

function Buffer() {
  const isDesctop = useMediaQuery('(min-width: 640px)',{
      initializeWithValue:false
  })
  if (isDesctop) return <div className={styles.bufferLaptop}>Buffer line</div>;
  return (<div className={styles.bufferMobile}>
            <a href="https://github.com/RamdaniRamdane" target="_blank">
                <Image src={gitImage} alt="rey" width={30} height={30}  />
            </a> 
          </div>)
}
export default Buffer;
