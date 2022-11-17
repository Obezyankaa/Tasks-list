import React, { useEffect, useState } from 'react'
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

export default function PostContainer() {
  const [limit, setLimit] = useState(10);
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)
  const [createPost, {}] = postAPI.useCreatePostMutation()
    
//   useEffect(()=> {
//     setTimeout(()=> {
//         setLimit(3)
//     },2000)
//   }, [])
    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title } as IPost)
    }

  return (
    <div className='post__container'>
        <button onClick={handleCreate}>new post</button>
        <div className='post__list'>
            {isLoading && <h1>идет загрузка</h1>}
            {error && <h1>произошла ошибка</h1>}
            {posts?.map((post)=>
            <PostItem key={post.id} post={post} />
            )}
        </div>
    </div>
  )
}
