import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../postSlice";
import AllPost from "./AllPost";
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
              placeholder="Whats on your mind ?"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button onClick={() => postHandler()}>Post</button>
            <button onClick={() => setPostModal(false)}>Cancel</button>
          </div>
        </div>
      )}
      <AllPost />
    </div>
  );
}
