# Todo Express API

A robust TypeScript-based Todo API built with Express.js, featuring dependency injection and MongoDB integration.

## Features

- 🚀 Built with TypeScript for type safety
- 🏗️ Dependency Injection using Awilix
- 🗄️ MongoDB database integration
- 🔒 Environment-based configuration
- 🐳 Docker and Docker Compose support
- 📝 RESTful API endpoints
- 🛡️ Error handling middleware
- 📦 Modular architecture

## Prerequisites

- Docker


## Installation

1. Clone the repository:
```bash
git clone https://github.com/nosadaniel/todo-express-api.git
cd todo-express-api
```

2. Create environment files in the root directory:
```bash
touch .env
touch  .env.db
```

3. Configure your environment variables in `.env` and `.env.db`

## Environment Variables 

### Application (.env)
```
PORT=3000
MONGO_URI=mongodb://mongodb:27017/todo-app
```

### Database (.env.db)
```
DATABASE_NAME=todo-app
```
4. Run the following docker command in your machine

### create the network 

```bash
docker network create todo-network
```

### Run with Docker

Build and start all services:
```bash
docker-compose up --build
```

2. To run in detached mode:
```bash
docker-compose up -d
```

The server will start on `http://localhost:3000`

## API Endpoints

### Todos

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get a specific todo
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── models/         # Database models
├── routes/         # API routes
├── services/       # Business logic
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## Author

Nosa Daniel - [GitHub](https://github.com/nosadaniel)