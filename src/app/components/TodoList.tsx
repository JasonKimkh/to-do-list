import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../interface/Todo";
import { DragDropContext, Draggable, Droppable, DropResult } from "@hello-pangea/dnd";

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
  onDragEnd: (result: DropResult) => void;
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
  handleSaveEdit,
  onDragEnd 
}) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps} className="space-y-2">
            {todos
              .filter((todo) => showCompleted || !todo.completed)
              .map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-2 border rounded flex justify-between items-center bg-gray-100"
                    >
                      <TodoItem
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                        editingId={editingId}
                        editTask={editTask}
                        startEditing={startEditing}
                        setEditTask={setEditTask}
                        handleSaveEdit={handleSaveEdit}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
  };

export default TodoList;

