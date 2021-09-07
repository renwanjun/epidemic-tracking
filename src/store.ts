import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/reducers/counter";
import loginReducer from "@/reducers/login";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware()
  //     .prepend(
  //       // correctly typed middlewares can just be used
  //       additionalMiddleware,
  //       // you can also type middlewares manually
  //       untypedMiddleware as Middleware<
  //         (action: Action<'specialAction'>) => number,
  //         RootState
  //       >
  //     )
  //     // prepend and concat calls can be chained
  //     .concat(logger)
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
