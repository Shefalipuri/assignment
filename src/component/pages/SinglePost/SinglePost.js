import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../postSlice";
export default function SinglePost() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { singlePost } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, [postId]);

  return singlePost.id ? (
    <div className="single-post">
      <div className="post-card">
        <span>User ID : {singlePost.userId}</span>
        <div className="post-title">Title:{singlePost.title}</div>
        <div className="post-body">Body :{singlePost.body}</div>
      </div>
    </div>
  ) : (
    <>Loading...</>
  );
}
