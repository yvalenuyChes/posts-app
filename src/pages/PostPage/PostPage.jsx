import { useParams } from 'react-router-dom'
import Button from "../../widgets/Button/Button"
import { useGetPostQuery } from "../../store/Slices/postSlice"
import styles from './styles.module.scss'


export default function PostPage(){

   const params = useParams() 

   const {data} = useGetPostQuery(params.postId)

   return(
      <div className={styles.container} >
         <div className={styles.post__id} >PostId: {data ?  data.id : 'Loading...'}</div>
         <div className={styles.post__title} >
            {data? data.title  : 'Loading...'}
         </div>
         <div className={styles.post__text} >
            {data? data.body  : 'Loading...'}
         </div>
         <div>
            <Button
               text={'На главную'}
               to={'/'}
            />
         </div>
      </div>
   )
}