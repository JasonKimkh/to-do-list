import React from "react";

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete}) => {
    return (
        <li className="flex justify-between items-center p-2 border rounded bg-gray-100">
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="mr-2 cursor-pointer"
            />
            
            <span
            onClick={() => onToggle(todo.id)}
            className={`flex-1 cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
            >
            {todo.task}
            </span>
            <button onClick={() => onDelete(todo.id)}
             className="text-red-500 hover:text-red-700">
                삭제
             </button>
            </li>

    );
};

export default TodoItem;