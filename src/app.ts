import express from 'express';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import 'reflect-metadata';

// Create container
const container = new Container();

// Create server
const server = new InversifyExpressServer(container);

// Configure server
server.setConfig((app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
});

// Build server
const app = server.build();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export { app, container }; 