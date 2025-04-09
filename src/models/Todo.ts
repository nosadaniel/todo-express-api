import mongoose, { Schema, Document } from 'mongoose';
import { ITodo } from '../interfaces/ITodo';

export interface TodoDocument extends Omit<ITodo, 'id'>, Document {}

const TodoSchema: Schema = new Schema(
    {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    completed: {
        type: Boolean,
        default: false,
    }
    
    }, 
    { timestamps: true }
);

export const Todo = mongoose.model<TodoDocument>('Todo', TodoSchema);

