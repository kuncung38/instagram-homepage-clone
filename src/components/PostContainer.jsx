import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../stores/reducers.js/postReducer";
import PostSingle from "./PostSingle";

const PostContainer = () => {
    const { data } = useSelector((state) => state.post);
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(fetchPosts());
    }, []);

    useEffect(() => {
        if (data.length) {
            console.log(data);
        }
    }, [data]);

    return (
        <main className="flex flex-col gap-4">
            <PostSingle post={data[0]} />
        </main>
    );
};

export default PostContainer;
