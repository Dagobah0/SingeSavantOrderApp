import axios from "axios";
import mock from "./api-mock";

export const HTTP = axios.create({
  baseURL: `http://unknow.test/`,
  headers: {
    Authorization: `Bearer {token}`
  }
});

mock(HTTP);
