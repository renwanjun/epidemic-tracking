import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import {
  login as loginService,
  register as registerService,
  getUser as getUserService,
} from "@/services/user";
import { User } from "@/interfaces/user";
import { message } from "antd";

const NAMESPACE = "login";
const initialState = {
  token: "" || localStorage.getItem("token"),
  user: {},
  isLogin: false,
};

// 异步操作
export const login = createAsyncThunk(
  `${NAMESPACE}/login`,
  async (params: User, state) => {
    // console.log(state);
    const response = await loginService(params);
    return response;
  }
);

export const register = createAsyncThunk(
  `${NAMESPACE}/register`,
  async (params: User) => {
    const response = await registerService(params);
    return response;
  }
);

export const getUser = createAsyncThunk(
  `${NAMESPACE}/user`,
  async function (params) {
    // await new Promise(resovle => setTimeout(resovle, 1000));
    const response = await getUserService();
    return response;
  }
);
const usersSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    overrideStateProps(state, { payload }: PayloadAction<User>) {
      return {
        ...state,
        ...payload,
      };
    },
    clearToken(state) {
      localStorage.removeItem("token");
      state.token = "";
      state.isLogin = false;
    },
    setToken(state, { payload }: any) {
      state.token = payload;
      localStorage.setItem("token", payload);
    },
    // getUser: state => {
    //   state.username = "admin";
    // },
    // login: (
    //   state,
    //   action: PayloadAction<{ name: string; password: string }>
    // ) => {
    //   // state.token = "sdadsadasdasdsa";
    //   localStorage.setItem("token", "");
    // },
    // register: () => {},
  },
  // 处理异步请求结果的reducer
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        // state.status = 'loading'
      })
      .addCase(login.fulfilled, (state, action) => {
        const { payload } = action;
        const { status, data } = payload;
        if (status === 200) {
          message.success("登录成功");
          Object.assign(state, data);
          // console.log(state);
          localStorage.setItem("token", data.token);
          state.isLogin = true;
        } else {
          message.error("error");
        }
      })
      .addCase(login.rejected, (state, action) => {
        // state.status = 'failed'
        // state.error = action.error.message
      })
      // 注册
      .addCase(register.fulfilled, (state, action) => {})
      .addCase(getUser.pending, (state, action) => {
        // return message.loading('ds','adsad')
      })
      .addCase(getUser.fulfilled, (state, { payload, meta, type }) => {
        // console.log(action);
        if (payload.status === 200) {
          Object.assign(state.user, payload.data);
          state.isLogin = true;
        } else {
          message.error("success");
        }
      })
      .addCase(getUser.rejected, (state, actioin) => {});
  },
});

// export const { login, register } = usersSlice.actions;
export const { overrideStateProps, setToken, clearToken } = usersSlice.actions;
export const selectUsername = (state: any) => state[NAMESPACE].user.username;
export const selectIsLogin = (state: any) => state[NAMESPACE].isLogin;
export const selectToken = (state: any) => state[NAMESPACE].token;
export default usersSlice.reducer;
