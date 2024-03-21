import axios from "axios";

const UserApi = axios.create({
  baseURL: "http://localhost:3000/user",
  withCredentials: true,
});

export default UserApi;
