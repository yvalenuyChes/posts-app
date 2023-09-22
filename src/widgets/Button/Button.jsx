import { Link } from "react-router-dom";
import styles from './styles.module.scss'

export default function Button({text, to}){
   return(
      <div className={styles.container} >
         <Link className={styles.button} to={`${to}`}>{text}</Link>
      </div>
   )
}