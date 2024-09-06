"use client";
import { useEffect , useState } from "react"
import styles from "./linecouter.module.css"

export default function LineCounter (){
    const [height , setHeight] = useState(0)
    const [ nums  , setNums ]=useState(Array.from(Array(60).keys(), n => n+1))
    
    const handleNums =()=>{
        setHeight(window.innerHeight)
        let nbLines=(height-15)/14
        let arr =[]
        for(let i=1;i<=Math.ceil(nbLines);i++){
            arr.push(i) 
        }
        setNums(arr)
    }
    useEffect(()=>{
        window.addEventListener('resize', handleNums);
        return () => window.removeEventListener('resize', handleNums);
    })

    return(
        <>
        <div id="line" className={styles.lineCounter}>
        { nums.map( (num , index) =>(
            <p key={index}>{num}</p>
        ))}
        </div>
        </>
    )
}
