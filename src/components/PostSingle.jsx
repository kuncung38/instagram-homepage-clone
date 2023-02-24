import React from "react";
import UserIcon from "./shared/UserIcon";

import {
    HeartIcon,
    ChatBubbleOvalLeftIcon,
    PaperAirplaneIcon,
    BookmarkIcon,
} from "@heroicons/react/24/outline";

const PostSingle = ({ post }) => {
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
                    <HeartIcon className="w-7 h-7" />
                    <ChatBubbleOvalLeftIcon className="w-7 h-7" />
                    <PaperAirplaneIcon className="w-7 h-7" />
                </div>

                <BookmarkIcon className="w-7 h-7" />
            </div>

            <p className="font-semibold">{`${post?.totalLike} likes`}</p>

            <section></section>
        </div>
    );
};

export default PostSingle;
