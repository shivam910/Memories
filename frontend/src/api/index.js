import axios from "axios";  // to make API calls
const url = "http://localhost:5000/posts"   //this url is pointing to backend route

export const fetchPosts = () => axios.get(url);