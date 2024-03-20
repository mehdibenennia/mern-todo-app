# Todo App - MERN

## This is a simple Todo application built with React for the frontend and Node.js with Express for the backend. It allows users to create, read, update, and delete todo items.

## Features

- Add a new todo item
- Mark todo items as completed
- Update existing todo items
- Delete todo items
- Real-time data fetching

## Technologies Used

- Frontend:
  - React.js
  - Tailwind CSS
- Backend:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose ODM)

## Getting Started

### Prerequisites

# Make sure you have the following installed:
- Node.js and npm (Node Package Manager)
- MongoDB (Make sure MongoDB is running locally or provide the connection URI)

### Installation

# 1. Clone the repository:
git clone https://github.com/mehdibenennia/MERN-TODO-APP.git

# 2. Navigate to the project directory:
cd MERN-TODO-APP

# 3. Install dependencies for both frontend and backend:
cd frontend
npm install
cd ../backend
npm install

# 4. Configure backend:
# - Create a .env file in the backend directory.
# - Define the MongoDB connection URI in the .env file:
#   MONGODB_URI=mongodb://localhost:27017/todo-app

# 5. Start the backend server:
cd ../backend
npm start

# 6. Start the frontend server:
cd ../frontend
npm start

# 7. Visit http://localhost:3000 in your browser to view the Todo App.

## Usage

- To add a new todo item, type the todo item's title in the input field and press Enter or click the "Add Todo" button.
- To mark a todo item as completed, click the checkbox next to the todo item.
- To update a todo item, click the "Update" button next to the todo item, modify the title in the input field, and press Enter or click the "Update" button again.
- To delete a todo item, click the "Delete" button next to the todo item.

## Contributing

# Contributions are welcome! Feel free to open issues or pull requests for any improvements or features you'd like to see.

## License

# This project is licensed under the MIT License - see the LICENSE file for details.

