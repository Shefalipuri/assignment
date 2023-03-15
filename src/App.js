import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPost } from "./component/pages/postSlice";
import { Home } from "./component/pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/header/Navbar";
import SinglePost from "./component/pages/SinglePost/SinglePost";

function App() {
  const dispatch = useDispatch();
  const [postModal, setPostModal] = useState(false);
  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  return (
    <>
      <Router>
        <Navbar setPostModal={setPostModal} />
        <Routes>
          <Route
            path="/"
            element={<Home setPostModal={setPostModal} postModal={postModal} />}
          />
          <Route path="/post/:postId" element={<SinglePost />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
