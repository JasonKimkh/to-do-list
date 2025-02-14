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
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="새 작업 추가"
            ></input>
            <button type="submit">추가</button>
        </form>
    )
}

export default TodoInput;