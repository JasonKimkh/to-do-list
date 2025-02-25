import React from "react";
import { Todo } from "../interface/Todo";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    editingId: number | null;
    editTask: string;
    startEditing: (id: number, task: string) => void;
    setEditTask: (task: string) => void;
    handleSaveEdit: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({  
    todo,
    onToggle,
    onDelete,
    editingId,
    editTask,
    startEditing,
    setEditTask,
    handleSaveEdit
}) => {
    return (
        <li className="flex justify-between items-center p-2 border rounded bg-gray-100">
           {editingId === todo.id ? (
  <input
    type="text"
    value={editTask}
    onChange={(e) => setEditTask(e.target.value)}
    onBlur={() => handleSaveEdit(todo.id)} // 입력 필드에서 벗어나면 저장
    onKeyDown={(e) => e.key === "Enter" && handleSaveEdit(todo.id)} // Enter 누르면 저장
    className="border p-1 rounded w-full"
  />
) : (
  <span onClick={() => startEditing(todo.id, todo.task)}>{todo.task}</span>
)}
            
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