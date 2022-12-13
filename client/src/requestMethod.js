import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzFjY2VhYzgwM2ExM2IxNmE2MzY5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDQ1MDU3OCwiZXhwIjoxNjcwNzA5Nzc4fQ.55cbPrtGu-dehJTEp6cOD4vVRpKkZ2I1UnvvxyOx3ZE";


// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})