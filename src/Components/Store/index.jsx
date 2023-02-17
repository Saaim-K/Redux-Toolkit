import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./Slices/UserSlice.jsx";

const store = configureStore({
   reducer: {
      users: usersSlice.reducer
   }
});

export default store;