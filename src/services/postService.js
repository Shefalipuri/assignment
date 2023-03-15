import axios from "axios";

export const getAllPostService = () =>
  axios.get("https://jsonplaceholder.typicode.com/posts");

export const getSignlePostService = (postId) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

export const addPostService = (postData) => {
  console.log(postData);
  return axios.post(
    "https://jsonplaceholder.typicode.com/posts",

    JSON.stringify(postData),

    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
};
