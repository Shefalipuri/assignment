import React from "react";
import { useNavigate } from "react-router-dom";

export default function PostCard({ postData }) {
  const navigate = useNavigate();

  return (
    <div className="post-card" onClick={() => navigate(`/post/${postData.id}`)}>
      <div className="post-header">
        <p>User Id : {postData.userId}</p>
        <p>Post Id : {postData.id}</p>
      </div>
      <div className="post-title">Title : {postData.title}</div>
      <div className="post-body">Body: {postData.body}</div>
    </div>
  );
}
