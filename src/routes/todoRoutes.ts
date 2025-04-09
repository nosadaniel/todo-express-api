import { Router } from 'express';
import { TodoController } from '../controllers/TodoController';

export const createTodoRouter = (todoController: TodoController) => {
    const router = Router();

    // Map controller methods to routes
    router.get('/', (req, res) => todoController.getAllTodos(req, res));
    router.get('/:id', (req, res) => todoController.getTodoById(req, res));
    router.post('/', (req, res) => todoController.createTodo(req, res));
    router.put('/:id', (req, res) => todoController.updateTodo(req, res));
    router.delete('/:id', (req, res) => todoController.deleteTodo(req, res));

    return router;
    
    
    
};