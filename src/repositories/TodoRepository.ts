import {ITodo, ITodoRepository } from "../interfaces/ITodo";
import {Todo, TodoDocument} from "../models/Todo";

import mongoose from "mongoose";

export class TodoRepository implements ITodoRepository {

    constructor(private readonly mongoConnection: mongoose.Connection) {}

    async findAll(): Promise<ITodo[]> {
       return Todo.find().sort({ createdAt: -1 });
    }

    async findById(id: string): Promise<ITodo | null> {
        return Todo.findById(id);
    }   

    async create(todo: ITodo): Promise<ITodo> {
        return Todo.create(todo);
    }

    async update(id: string, todo: ITodo): Promise<ITodo | null> {
        return Todo.findByIdAndUpdate(id, todo, { new: true });
    }

    async delete(id: string): Promise<boolean> {
        const result = await Todo.findByIdAndDelete(id);
        return result !== null;
    }       
    
    
    
    
    
    
}