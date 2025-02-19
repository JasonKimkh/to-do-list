import React from "react";
import TodoItem from "./TodoItem";

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
      <ul className="space-y-2 bg-white p-4 shadow rounded-lg">
       {todos.length === 0 ? (
        <p className="text-center text-gray-500">할 일이 없습니다.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))
      )}
      </ul>
    );
  };

export default TodoList;

