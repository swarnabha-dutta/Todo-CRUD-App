import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Rootstate } from "../app/store";
import { createTodo, getTodo,deleteTodo, updatedTodo } from "../services/todoApi";
import { setTodos } from "../features/todo/todoSlices";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";




interface Todo{
    _id:string,
    title:string,
    completed:boolean;
}


const Home = () =>{
    const dispatch = useDispatch();
    const todos = useSelector((state:Rootstate) => state.todo.todos) as Todo[];



    const fetchTodos = async () =>{
        try {
            const response = await getTodo();

            dispatch(setTodos(response.data.todos));
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        fetchTodos();
    },[]);

    const handleAdd= async (title:string) => {
        await createTodo(title);
        fetchTodos();
    };
    const handleDelete = async (id:string) => {
        await deleteTodo(id);
        fetchTodos();
    };

    const handleUpdate = async (id:string,title:string) => {
        await updatedTodo(id,{title});
        fetchTodos();
    };

     return (
    <div className="container">
      <div className="todo-card">
        <h1>🚀 What To Do 🚀</h1>

        <TodoForm onAdd={handleAdd} />

        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );

}

export default Home;