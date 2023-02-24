import React from "react";
import Header from "./components/Header";
import PostContainer from "./components/PostContainer";
import StoriesContainer from "./components/StoriesContainer";

const App = () => {
    return (
        <div className="flex flex-col gap-4 w-screen max-w-[470px] mx-auto">
            <Header />

            <StoriesContainer />

            <PostContainer />
        </div>
    );
};

export default App;
