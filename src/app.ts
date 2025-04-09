import express from 'express';
import cors from 'cors';
import { setupContainer } from './container';
import { createTodoRouter } from './routes/todoRoutes';
import { connectToDatabase, disconnectFromDatabase } from './config/database';



// initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

//connect to database
connectToDatabase();

//setup dependency injection container
const container = setupContainer();

//setup routes
app.use('/api/todos', createTodoRouter(container.resolve('todoController')));

//start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//handle shutdown gracefully
const gracefulShutdown = async () => {
    console.log('Shutting down gracefully...');
    
    // Close the server
    server.close(() => {
        console.log('Server closed');
        disconnectFromDatabase();
        process.exit(0);
    });

    // Force close after 10 seconds
    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
};

// Handle termination signals
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    gracefulShutdown();
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    gracefulShutdown();
});







