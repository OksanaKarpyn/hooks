import React from "react";
import "./App.css";
import PostHook from "./components/PlaceholderPostHook";
import CommentHook from "./components/CommentHook";
import Comment2Hook from "./components/Comment2Hook";
function App() {
  return (
    <>
      <div className="container-fluid">
        <PostHook />
        <CommentHook />
        <Comment2Hook />
      </div>
    </>
  );
}

export default App;
