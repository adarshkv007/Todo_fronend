function TodoItem({ todo, onDelete, onToggle }) {
    return (
        <div className="todo-item">
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo._id, todo.completed)}
            />
            <span style={{ textDecoration: todo.completed ?
                'line-through' : 'none' }}>
                    {todo.title}
                </span>
               
                <button onClick={() => onDelete( todo._id)}>Delete</button>
        </div>
    );
}

export default TodoItem;