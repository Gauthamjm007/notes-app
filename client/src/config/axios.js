import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3037"
});

export default axios;
