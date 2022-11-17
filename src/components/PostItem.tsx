import React, {FC} from "react";
import { IPost } from "../models/IPost";
import './post.sass';

interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div className="post">
            {post.id}. {post.title}
            <button className="post__btn">X</button>
        </div>
    )
}

export default PostItem;