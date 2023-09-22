import { FixedSizeList } from 'react-window'
import Post from '../Post/Post'
import { useGetAllPostsQuery } from "../../store/Slices/allPostsSlice"


export default function PostList(){

   const {data} = useGetAllPostsQuery()

   const Row = ({ index, style}) => {
      return(
         <div style={style} >
         <Post
            id={data[index].id}
            title={data[index].title}
            body={data[index].body}
            to={data[index].id}
         />
         </div>
      )
   }
      
   return(
      <div>
         {
            !data
            ? <p>Loading...</p>
            :
                <FixedSizeList
                  height={500}
                  width={600}
                  itemCount={data.length}
                  itemSize={300}
                  itemKey={data.id}
                  itemData={data}
                >
                  {Row }
               </FixedSizeList>
         }
      </div>
   )
}