import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/todoSlice";
import { Button } from "../../ui";

export const TaskFilter = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.todos.filter);

  return (
    <div className="flex items-center gap-4 overflow-x-auto whitespace-nowrap">
      <Button
        type="primary"
        state={activeFilter === "all" ? "active" : "default"}
        onClick={() => dispatch(setFilter("all"))}
        className="min-w-[120px]"
      >
        Все
      </Button>
      <Button
        type="secondary"
        state={activeFilter === "completed" ? "active" : "default"}
        onClick={() => dispatch(setFilter("completed"))}
        className="min-w-[120px]"
      >
        Выполнено
      </Button>
      <Button
        type="warning"
        state={activeFilter === "incomplete" ? "active" : "default"}
        onClick={() => dispatch(setFilter("incomplete"))}
        className="min-w-[120px]"
      >
        Не выполнено
      </Button>
    </div>
  );
};
