import { useState } from 'react';

function AddTodo({ onAdd }) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Add a new todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodo;