import React from "react";
import { useSelector } from "react-redux";
import { TaskCard } from "../../ui";

export const TaskList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="flex flex-col gap-5">
      {filteredTodos.map((todo) => (
        <TaskCard
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};
