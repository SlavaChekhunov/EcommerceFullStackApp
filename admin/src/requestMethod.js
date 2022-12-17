import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});



//when you login you need the access token, the token is stored inside the user object, however when you try to get it from localStorage it will be a string
//so you use JSON parse to make it into an JSON object (you need to do it twice)




