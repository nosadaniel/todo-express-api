export interface ITodo {
    id?: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt?: Date;
    updatedAt?: Date;
};

export interface ITodoRepository {
    findAll(): Promise<ITodo[]>;
    findById(id: string): Promise<ITodo | null>;
    create(todo: ITodo): Promise<ITodo>;
    update(id: string, todo: ITodo): Promise<ITodo | null>;
    delete(id: string): Promise<boolean>;
}

export interface ITodoService {
    getAllTodos(): Promise<ITodo[]>;
    getTodoById(id: string): Promise<ITodo | null>;
    createTodo(todo: ITodo): Promise<ITodo>;
    updateTodo(id: string, todo: ITodo): Promise<ITodo | null>;
    deleteTodo(id: string): Promise<boolean>;
}

