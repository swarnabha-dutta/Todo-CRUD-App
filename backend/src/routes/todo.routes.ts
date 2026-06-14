import { Router } from "express"
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.controller";


const router = Router();


router.post('/',createTodo);
router.get('/', getTodos);
router.put("/:id",updateTodo);
router.delete('/:id',deleteTodo);



export default router;