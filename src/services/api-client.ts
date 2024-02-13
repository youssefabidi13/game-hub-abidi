import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4c59b2d25b474932a165b5615bdbcb2d",
  },
});
