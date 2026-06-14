import mongoose , {Schema,Document} from "mongoose";
import { ITodo } from "../types/todo.types";

export interface TodoDocument extends ITodo,Document{}


const todoSchema  = new Schema<TodoDocument>(
    {
        title:{
            type:String,
            required:true,
            trim:true,
        },
        completed:{
            type:Boolean,
            default:false,
        },
    },
    {
        timestamps:true
    }
);

const Todo = mongoose.model<TodoDocument>("Todo" , todoSchema);

export default Todo;