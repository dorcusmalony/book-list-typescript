# TypeScript Book Management Project

This project is a simple TypeScript-based application for managing and displaying books and their reviews. It demonstrates the use of TypeScript features such as classes, interfaces, and type annotations, along with a basic setup for bundling using Webpack.

## Features

1. **Book Class**: 
   - Represents a book with properties: `title`, `author`, and `year`.
   - Includes a constructor for initializing book objects.

2. **Display Books**:
   - A function `displayBook` dynamically displays book information on a webpage.

3. **Review Interface**:
   - Defines the structure of a review object with properties: `bookId`, `rating`, and `comment`.

4. **Add Reviews**:
   - A function `addReview` allows adding reviews for books, which are stored in an array.

5. **TypeScript Integration**:
   - The project uses TypeScript for type safety and better code maintainability.

## Project Structure

- **`src/main.ts`**: Contains the main TypeScript code for the application.
- **`index.html`**: The HTML file that serves as the entry point for the application.
- **`webpack.config.js`**: Configuration file for Webpack to bundle the TypeScript code.
- **`tsconfig.json`**: TypeScript configuration file for compiler options.
- **`package.json`**: Contains project metadata and dependencies.

## Setup and Usage

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Build the Project**:
   ```bash
   npm run build
   ```

3. **Run the Application**:
   - Open `index.html` in a browser to view the application.

## Development

- **TypeScript Compilation**:
  - The project uses `ts-loader` with Webpack to compile TypeScript files into JavaScript.

- **Source Maps**:
  - Source maps are enabled for easier debugging.

## Example Usage

- The application displays a list of books on the webpage.
- Reviews can be added programmatically using the `addReview` function.

## Dependencies

- `typescript`: For TypeScript support.
- `ts-loader`: To integrate TypeScript with Webpack.
- `webpack` and `webpack-cli`: For bundling the application.

