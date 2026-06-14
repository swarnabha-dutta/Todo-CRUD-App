export interface ITodo{
    title:string;
    completed:boolean;
    createdAt?:Date;
}


export interface CreateTodoBody{
    title:string;
}

export interface UpdateTodoBody{
    title? : string;
    completed?:boolean,
}