import React, { useState } from "react";

interface TodoInputProps {
  onAdd: (title: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
    const [task, setTask] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(task.trim()) {
            onAdd(task);
            setTask("");
        }
    };

    return (
        <form className="flex gap-2 mb-4"
        onSubmit={handleSubmit}
        >
            <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="새 작업 추가"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            type="submit">
                추가
                </button>
        </form>
    )
}

export default TodoInput;