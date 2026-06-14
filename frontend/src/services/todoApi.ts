import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getTodos = () => API.get("/");


export const createTodos = (title:string)=> API.post("/",{title});

export const updatedTodo = (id:string,data:any)=>API.put(`/${id}`,data);

export const deleteTodo = (id:string)=> API.delete(`${id}`);