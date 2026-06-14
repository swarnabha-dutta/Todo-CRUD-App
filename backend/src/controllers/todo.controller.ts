import { Request, Response  }  from "express";
import { CreateTodoBody, UpdateTodoBody } from "../types/todo.types";
import Todo from "../models/todo.model";



// CREATE TODO 
export const createTodo = async (req:Request<{id:string} , {}, CreateTodoBody> , res:Response) =>{
    try {
        const {title}  = req.body;
        if(!title || title.trim() === ""){
            return res.status(400).json({
                message : "Title is required",
            });
        }
        const todo  =await Todo.create({
            title,
        });
        return res.status(201).json({
            message:"success",
            todo
        });
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
        });
    }
}



// READ Todos

export const getTodos = async (req:Request  , res:Response)=>{
    try {
        const todos = await Todo.find();
        return res.status(200).json({
            todos
        });
    } catch (error) {
        return res.status(500).json({
            message:"Server Error",
            error
        });
    }
};




// UPDATE Todos
export const updateTodo  = async (req:Request<{id:string}, {}, UpdateTodoBody> ,res:Response)=>{
    try {
        const {id} = req.params;
        const updated = await Todo.findByIdAndUpdate(id,req.body , {
            new:true,
            runValidators:true
        });


        if(!updated){
            return res.status(404).json({
                message:"Todo not Found"
            });
        }
        return res.status(200).json(updated);
    } catch (error) {
        return res.status(500).json({message:"Server Error", error});
    }
}




// DELETE TODO

export const deleteTodo = async (req:Request<{id:string}> , res:Response)=>{
    try {
        const {id} = req.params;
        const deleted = await Todo.findByIdAndDelete(id);

        if(!deleted){
            return res.status(404).json({
                message:"Todo is not Found",
            });
        }
        return res.status(200).json({
                message:"Todo deleted Successfully",
        })
    } catch (error) {
        return res.status(500).json({message:"Server Error", error});
    }
}


