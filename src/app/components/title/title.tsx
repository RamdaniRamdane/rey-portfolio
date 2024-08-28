import styles from './title.module.css'

function Title(props){
    return(
        <div>
            <h1 className={styles.text}>{props.text} <span className={styles.textColored}>{props.textColored}</span></h1>
        </div>
    )
}

export default Title 
