import axios from "axios";

export interface Response<T> {
  error: any;
  [data: string]: T | null;
}

export default axios.create({
  baseURL: "https://api.github.com",
});
