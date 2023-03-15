import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = ({ setPostModal }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div onClick={() => navigate("/")}>Home</div>
      <button onClick={() => setPostModal(true)}>Create Post</button>
    </div>
  );
};
export default Navbar;
