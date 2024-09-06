import Title from '../components/title/title'
import styles from './page.module.css'

const Projects = ()=>{
    const projects=["project 1","porject 2","project 3" , "project 4" , "project 5" , "project 6"]
    return(
        <div className={styles.grid}>
            {projects.map((project , index )=>(
                <div key={index} className={styles.gridItem}>{project}</div>
            ))}
        </div>
    )
}

export default function projects() {
  return (
    <div className={styles.container}>
      <Title text="My" textColored="Projects" />
      <Projects />
    </div>
  );
}
