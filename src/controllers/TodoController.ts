import { Request, Response } from 'express';
import { ITodoService } from '../interfaces/ITodo';

export class TodoController {
    constructor(private readonly todoService: ITodoService) {}

    async getAllTodos(req: Request, res: Response): Promise<void> {
        try {
            const todos = await this.todoService.getAllTodos();
            
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch todos' });
        }
    }

    async getTodoById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const todo = await this.todoService.getTodoById(id);
            if (!todo) {
                res.status(404).json({ error: 'Todo not found' }); 
                return; 
            } 
            res.status(200).json(todo);
            
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch todo' });
        }

    }

    async createTodo(req: Request, res: Response): Promise<void> {
        try{
            const todo = req.body;
            const newTodo = await this.todoService.createTodo(todo);
            res.status(201).json(newTodo);
        } catch (error) {
            console.error('Error creating todo:', error);
            res.status(500).json({ error: 'Failed to create todo' });
        }
    }

    async updateTodo(req: Request, res: Response): Promise<void> {
       try{
        const id = req.params.id;
        const todo = req.body;
        const updatedTodo = await this.todoService.updateTodo(id, todo);
        if (!updatedTodo) {
            res.status(404).json({ error: 'Todo not found' });
            return;
        } 
        res.status(200).json(updatedTodo);
        
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ error: 'Failed to update todo' });
    }
}

async deleteTodo(req: Request, res: Response): Promise<void> {
    try{
        const id = req.params.id;
        const deleted = await this.todoService.deleteTodo(id);
        if (!deleted) {
            res.status(404).json({ error: 'Todo not found' });
            return;
        }
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({ error: 'Failed to delete todo' });
    }
}
}