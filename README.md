# DemoNodeApp

DemoNodeApp is a simple Node.js application built with TypeScript and Express. It serves as a testing app to experiment with Node.js concepts and features.

## Features

- **Express Server**: A lightweight web server using Express.
- **Environment Configuration**: Uses `dotenv` for environment variable management.
- **Health Check Endpoint**: Includes a `/healthz` endpoint for basic health monitoring.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [pnpm](https://pnpm.io/) (for package management)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd DemoNodeApp
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and specify the following:

   ```env
   PORT=3000
   ```

4. Build the project:

   ```bash
   pnpm run build
   ```

5. Start the server:

   ```bash
   pnpm run start
   ```

6. Access the application in your browser at [http://localhost:3000](http://localhost:3000).

## Development

For development with live reloading:

```bash
pnpm run dev:watch
```

## Scripts

- `build`: Compiles the TypeScript code to JavaScript.
- `start`: Runs the compiled JavaScript code.
- `dev`: Builds and starts the application.
- `dev:watch`: Watches for file changes and recompiles automatically.

## License

This project is licensed under the ISC License.

## Author

David
