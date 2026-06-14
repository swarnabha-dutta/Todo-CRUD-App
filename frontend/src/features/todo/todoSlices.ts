import {createSlice} from "@reduxjs/toolkit";
interface Todo {
    _id: string;
    title: string;
    completed: boolean;
}
interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [],
};

export const todoSlices  = createSlice({
    name:"todo",
    initialState,
    reducers:{
        setTodos :(state , action ) =>{
            state.todos = action.payload;
        },
        addTodo :(state,action) =>{
            state.todos.push(action.payload);
        },
        deleteTodo :(state,action) =>{
            state.todos  = state.todos.filter(
                (todo:any) =>todo._id !== action.payload
            )
        },
        updateTodo :(state,action) =>{
            state.todos = state.todos.map((todo:any) => todo._id === action.payload._id ? action.payload : todo
            );
        },
    },
});

export const {setTodos,addTodo,deleteTodo,updateTodo} = todoSlices.actions;

export default todoSlices.reducer;