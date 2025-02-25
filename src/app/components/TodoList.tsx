import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../interface/Todo";

interface TodoListProps {
  todos: Todo[];
  showCompleted: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  editingId: number | null;
  editTask: string;
  startEditing: (id: number, task: string) => void;
  setEditTask: (task: string) => void;
  handleSaveEdit: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ 
  todos, 
  showCompleted,   
  onToggle,
  onDelete,
  editingId,
  editTask,
  startEditing,
  setEditTask,
  handleSaveEdit 
}) => {
    return (
      <ul>
      {todos
        .filter((todo) => showCompleted || !todo.completed) // 완료된 항목 숨기기
        .map((todo) => (
          <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          editingId={editingId}
          editTask={editTask}
          startEditing={startEditing}
          setEditTask={setEditTask}
          handleSaveEdit={handleSaveEdit}
        />
        ))}
    </ul>
    );
  };

export default TodoList;

