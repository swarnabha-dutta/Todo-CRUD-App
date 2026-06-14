import { useState } from "react";


interface Props{
    onAdd:(title:string) => void;
}

const TodoForm = ({onAdd} : Props) =>{
    const [title ,setTitle ] = useState("");
    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        if(!title.trim())return;
        onAdd(title);
        setTitle('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Add Todo tasks"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
            <button type="submit">
                Add Todo
            </button>
        </form>
    )
}


export default TodoForm;