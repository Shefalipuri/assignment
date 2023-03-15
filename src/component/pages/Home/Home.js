import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../postSlice";
import AllPost from "./AllPost";
import PostCard from "./PostCard";
export function Home({ setPostModal, postModal }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const postHandler = () => {
    if (title !== "" && body !== "") {
      dispatch(createPost({ title, body }));
    }
    setPostModal(false);
    setTitle("");
    setBody("");
  };

  return (
    <div>
      {postModal && (
        <div className="create-post-form">
          <div>
            <input
              placeholder="Title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div>
            <textarea
              style={{ width: "full" }}
              placeholder="Whats on your mind ?"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <button onClick={() => postHandler()}>Post</button>
        </div>
      )}
      <AllPost />
    </div>
  );
}
