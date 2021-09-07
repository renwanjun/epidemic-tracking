import request from "@/utils/request";

import { User } from "@/interfaces/user";

// import "@/mock";
// interface User {
//   username: string;
//   password: string;
// }
//这列的'/mock'与mock.js文件里的地址一致

export function login(params: User) {
  return request("/user/login", {
    method: "POST",
    data: params,
  });
  // console.log(params);
  // return axios.post("/login", params);
}

export function register(params: User) {
  return request("/user/register", {
    data: params,
  });
}

export function getUser() {
  return request.get("/user");
}
