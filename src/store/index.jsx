import { configureStore } from "@reduxjs/toolkit";
import { userSliceApi } from "./reducers/userslice";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authSliceApi } from "./reducer/authslice.jsx";

export  const store = configureStore({
    reducer:{
           [userSliceApi.reducerPath]: userSliceApi.reducer,
           [authSliceApi.reducerPath]:authSliceApi.reducer,
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(userSliceApi.middleware),
});

 setupListeners(store.dispatch);