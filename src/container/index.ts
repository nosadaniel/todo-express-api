import { createContainer, asClass, asValue, asFunction, InjectionMode } from "awilix";

import { TodoRepository } from "../repositories/TodoRepository";

import { TodoService } from "../services/TodoService";

import { TodoController } from "../controllers/TodoController";
import mongoose from 'mongoose';

export const setupContainer = () => {
    const container = createContainer({
        injectionMode: InjectionMode.CLASSIC,
    });

    // Register components
    container.register({
        // Values
        mongoConnection: asValue(mongoose.connection),

        //Repositories
        todoRepository: asClass(TodoRepository).singleton(),

        // Services
        todoService: asClass(TodoService).singleton(),

        // Controllers
        todoController: asClass(TodoController).singleton(),

    });

    return container;
    
    
};