import React, { useState } from "react";
import UserIcon from "./shared/UserIcon";

import {
    HeartIcon,
    ChatBubbleOvalLeftIcon,
    PaperAirplaneIcon,
    BookmarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { likePost } from "../stores/reducers.js/postReducer";

const PostSingle = ({ post }) => {
    const [allCommentShown, setAllCommentShown] = useState(false);
    const dispatcher = useDispatch();

    return (
        <div className="rounded-md border border-gray-200">
            <header className="flex items-center gap-4 px-2 py-1">
                <UserIcon user={post?.user} size={"2rem"} />
                <p className="font-semibold">{post?.user.username}</p>
            </header>

            <div className="flex items-center aspect-square">
                <img src={post?.images.url} />
            </div>

            <div className="flex justify-between p-2">
                <div className="flex gap-4">
                    <HeartIcon
                        onClick={(e) => dispatcher(likePost(post?.id))}
                        className="w-7 h-7"
                        style={{
                            backgroundColor: post?.user_has_liked
                                ? "red"
                                : "transparent",
                        }}
                    />
                    <ChatBubbleOvalLeftIcon className="w-7 h-7" />
                    <PaperAirplaneIcon className="w-7 h-7" />
                </div>

                <BookmarkIcon className="w-7 h-7" />
            </div>

            <p className="font-semibold px-2 py-2">{`${post?.totalLike} likes`}</p>

            <section className="flex flex-col gap-2 px-2 py-3">
                <p>
                    <span className="font-bold">{post?.user.username} </span>
                    {post?.caption.text}
                </p>
                {!allCommentShown && post?.comments?.length > 2 && (
                    <p
                        className="text-gray-400"
                        onClick={(e) => {
                            setAllCommentShown(true);
                        }}
                    >{`View all ${post.comments.length} comments`}</p>
                )}

                {!allCommentShown &&
                    post?.comments?.length < 3 &&
                    post.comments.map((el, index) => (
                        <p key={index}>
                            <span className="font-bold">
                                {el.from.username}
                            </span>
                            {el.text}
                        </p>
                    ))}

                {allCommentShown &&
                    post?.comments?.map((el, index) => (
                        <p key={index}>
                            <span className="font-bold">
                                {el.from.username}
                            </span>
                            {el.text}
                        </p>
                    ))}
            </section>
        </div>
    );
};

export default PostSingle;
