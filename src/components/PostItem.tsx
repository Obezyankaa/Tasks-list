import React, {FC} from "react";
import { IPost } from "../models/IPost";
import './post.sass';

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}
const handlerRemove = (event: React.MouseEvent) => {

}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {
    return (
        <div className="post">
            {post.id}. {post.title}
            <button onClick={() => remove()} className="post__btn">X</button>
        </div>
    )
}

export default PostItem;