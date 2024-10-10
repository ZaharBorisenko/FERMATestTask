import React, { useState } from "react";
import { AddTodoInput, TaskFilter, TaskList } from "./components";

export const App = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="max-w-7xl mx-auto mt-8 sm:my-24 px-4">
      <p className="text-2xl sm:text-8xl font-bold text-[#30324B] text-center mb-4 sm:mb-14">
        Список дел
      </p>

      <div className="mb-7 sm:mb-16">
        <AddTodoInput />
      </div>

      <div className="mb-5 sm:mb-8">
        <TaskFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>

      <div>
        <TaskList />
      </div>
    </div>
  );
};
