import React from "react";

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
    return (
        <ul>
            {todos.map(todo) => (
                <li key={todo.id}>
                    <span style={{
                        textDecoration: todo.completed ? "line-through" : "none"
                    }}
                    onClick={() => onToggle(todo.id)}
                    >
                    {todo.task}
                    </span>
                    <button onClick={() => onDelete(todo.id)}>삭제</button>
                </li>
            )};
        </ul>
    );
};

export default TodoList;

