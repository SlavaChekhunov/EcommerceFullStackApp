import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzFjY2VhYzgwM2ExM2IxNmE2MzY5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDQ1MDU3OCwiZXhwIjoxNjcwNzA5Nzc4fQ.55cbPrtGu-dehJTEp6cOD4vVRpKkZ2I1UnvvxyOx3ZE"


//when you login you need the access token, the token is stored inside the user object, however when you try to get it from localStorage it will be a string
//so you use JSON parse to make it into an JSON object (you need to do it twice)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
