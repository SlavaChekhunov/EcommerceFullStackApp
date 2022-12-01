import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzFjY2VhYzgwM2ExM2IxNmE2MzY5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTkzNjYyMCwiZXhwIjoxNjcwMTk1ODIwfQ._Zp0kmDb7PNVF5vK2X3VnxNDQEhKEyXamHCPNj2wsOc";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})