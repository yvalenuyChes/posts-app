
import Button from '../Button/Button'
import styles from './styles.module.scss'

export default function Post({id,title,body}){

   return(
      <div 
      className={styles.post}
      >
            <p>id: {id}</p>
         <p className={styles.post__title} >{title}</p>
         <p className={styles.post__text} >{body}</p>
         <Button to={`posts/${id}`} text={'Подробнее...'}  />
      </div>
   )

}