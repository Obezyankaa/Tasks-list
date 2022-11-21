import React, { useEffect, useState } from 'react'
import { updatePostfix } from 'typescript';
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

export default function PostContainer() {
  const [limit, setLimit] = useState(10);
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(limit)
  const [createPost, {}] = postAPI.useCreatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation(); 
  const [updatePostfix, {}] = postAPI.useUpdatePostMutation();

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title } as IPost)
    }

    const handleRemove = (post:IPost) => {
        deletePost(post)
    }

    const handlerUpdate = (post:IPost) => {
        updatePostfix(post)
    }

  return (
    <div className='post__container'>
        <button onClick={handleCreate}>new task</button>
        <div className='post__list'>
            {isLoading && <h1>идет загрузка</h1>}
            {error && <h1>произошла ошибка</h1>}
            {posts && posts.map((post)=>
            <PostItem remove={handleRemove} update={handlerUpdate} key={post.id} post={post} />
            )}
        </div>
    </div>
  )
}
