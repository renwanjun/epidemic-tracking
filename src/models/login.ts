import {
  login as loginService,
  register as registerService,
} from "@/services/user";

import { message } from "antd";

const namespace = "login";
const selectState = (state: any) => state[namespace];
const Model = {
  namespace,
  state: {
    username: "",
    password: "",
  },
  effects: {
    // *login(_, { call, select }) {},
  },
};
