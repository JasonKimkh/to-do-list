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
        <li className="flex justify-between items-center p-2 border rounded">
            <span
            onClick={() => onToggle(todo.id)}
            className={`flex-1 cursor-pointer' + (todo.completed ? ' line-through text-gray-400' : '')`}
            >
            {todo.task}
            </span>
            <button onClick={() => onDelete(todo.id)}
             className="text-red-500">
                삭제
             </button>
            </li>

    );
};

export default TodoItem;