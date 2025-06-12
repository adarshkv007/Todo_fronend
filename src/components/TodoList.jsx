import { useEffect, useState } from "react";
import TodoItem from "./Todoitem";
import AddTodo from "./AddTodo";

const API_URL = 'https://todo-backend-4nf0.onrender.com/todos';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const fetchTodos =async () => {
        const res = await fetch(API_URL);
        const data = await res.json();
        setTodos(data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleAdd =async (title) => {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        });
        const newTodo =await res.json();
        setTodos(prev => [...prev, newTodo]);
    };

    const handleDelete =async (id) => {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE'});
        setTodos(prev => prev.filter(todo => todo._id !==id));
    };

    const handleToggle = async (id, competed) => {
        const res = await fetch (`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: !completed })
        });
        const updated = await res.json();
        setTodos(prev => prev.map(todo => (todo._id === id ?
            updated : todo)));
    };

    return (
        <div className="todo-container">
            <h2>Todo List</h2>
        <AddTodo onAdd={handleAdd} />
        {todos.map(todo => (
            <TodoItem
            key={todo._id}
            todo={todo}
            onDelete={handleDelete}
            onToggle={handleToggle}
            />
        ))}
        </div>
    );
}

export default TodoList;