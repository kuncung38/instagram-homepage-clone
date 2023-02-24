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
            {data?.length &&
                data.map((el) => <PostSingle key={el.id} post={el} />)}
        </main>
    );
};

export default PostContainer;
