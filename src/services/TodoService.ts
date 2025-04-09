import {ITodo, ITodoRepository, ITodoService} from "../interfaces/ITodo";

export class TodoService implements ITodoService {
    constructor(private  todoRepository: ITodoRepository) {}

    async getAllTodos(): Promise<ITodo[]> {
        return this.todoRepository.findAll();
    }

    async getTodoById(id: string): Promise<ITodo | null> {
        return this.todoRepository.findById(id);
    }

    async createTodo(todo: ITodo): Promise<ITodo> {
        return this.todoRepository.create(todo);    
    }

    async updateTodo(id: string, todo: ITodo): Promise<ITodo | null> {
        return this.todoRepository.update(id, todo);
    }

    async deleteTodo(id: string): Promise<boolean> {
        return this.todoRepository.delete(id);
    }
    
    
}