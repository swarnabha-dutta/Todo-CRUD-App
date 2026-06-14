import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlices.ts";



export const store =  configureStore({
  reducer: {
    todo:todoReducer,
  } 
});


export type  Rootstate = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
