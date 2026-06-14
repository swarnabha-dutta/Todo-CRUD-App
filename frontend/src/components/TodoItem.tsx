import {FaEdit,FaTrash} from "react-icons/fa";



interface Todo{
    _id:string;
    title:string,
    completed:boolean;
}

interface Props{
    todo:Todo;
    onDelete:(id:string)=>void;
    onUpdate:(id:string,title:string)=>void;
}

const TodoItem = ({
    todo,
    onDelete,
    onUpdate,
}:Props)=>{
    const handleEdit = ()=>{
        const newTitle = prompt(
            "Update Todo",
            todo.title,
        );

        if (newTitle === null) return;
        if (newTitle.trim() === "") return;
        onUpdate(todo._id,newTitle);
    };
    return (
        <div className="todo-item">
            <p>{todo.title}</p>
            <div className="icons">
                <FaEdit
                className="edit"
                onClick={handleEdit}
                />
                <FaTrash
                className="delete"
                onClick={()=>onDelete(todo._id)}
                />
            </div>
        </div>
    );
}

export default TodoItem;