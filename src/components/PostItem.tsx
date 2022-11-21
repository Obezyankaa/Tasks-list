import React, {FC} from "react";
import { IPost } from "../models/IPost";
import './post.sass';

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
    const handlerRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post);
    }

    const handaleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ''
        update({...post, title})
    }
    return (
        <div className="post">
            {post.id}. {post.title}
            <div className="post__block">
            <button onClick={handlerRemove} className="post__btn">&#10060;</button>
            <button onClick={handaleUpdate} className="post__btn">&#128221;</button>
            </div>
        </div>
    )
}

export default PostItem;