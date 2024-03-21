// App.jsx

import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div className=" ">
            {/* Header */}
            <div className="container mx-auto mt-4 p-4 bg-white rounded-lg shadow">
                {/* Add New To-Do Section */}
        <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 bg-indigo-500 rounded"></div>
            </div>
            <div className="flex flex-row justify-between items-center py-6 mb-1">
                <h1 className="sm:w-1/5 text-gray-900 font-bold title-font text-2xl mb-2 sm:mb-0">Todo APP</h1>
                <div className="sm:w-2/5 text-right">
                    <AddTodo onAdd={handleAddTodo} />
                </div>
            </div>
        </div>
                {/* To-Do Table - You might want to include TodoList inside your Table component for actual app structure */}
                <TodoList todos={todos} setTodos={setTodos}/>
            </div>
        </div>
    );
}

export default App;
