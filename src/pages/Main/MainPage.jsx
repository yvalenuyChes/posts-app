import PostList from "../../widgets/PostsList/PostsList"
import styles from './styles.module.scss'

export default function MainPage(){
   return(
      <div className={styles.container} >
         <PostList/>
      </div>
   )
}