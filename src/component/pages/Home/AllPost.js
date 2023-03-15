import React from "react";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";

export default function AllPost() {
  const { allPosts } = useSelector((state) => state.post);

  return allPosts.length > 0 ? (
    <div className="home-container">
      {allPosts.map((postData) => (
        <PostCard postData={postData} />
      ))}
    </div>
  ) : (
    <></>
  );
}
