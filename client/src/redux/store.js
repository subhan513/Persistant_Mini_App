import {configureStore} from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import NotesSlice from "./features/NotesSlice";

export const store = configureStore({
  reducer : {
    [apiSlice.reducerPath] : apiSlice.reducer,
    notes : NotesSlice
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({}).concat(apiSlice.middleware),
  devTools : true
})