import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
   name: "users",
   initialState: [],
   reducers: {
      addUser: (state, action) => { },
      removeUser: (state, action) => { },
      clearAllUsers: (state, action) => { }
   }
});

console.log(usersSlice)

export default usersSlice