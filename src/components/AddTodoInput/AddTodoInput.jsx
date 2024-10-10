import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import { toastWarn } from "../../lib/toast";

export const AddTodoInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    } else toastWarn("Задача не может быть пустой...");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Создать задачу"
        className="w-full outline-none bg-white shadow-[0px_5px_20px_1px_rgba(34,60,80,0.2)] p-2.5 sm:py-8 sm:px-5 rounded-lg sm:rounded-[1.25rem] 
        sm:placeholder:text-2xl placeholder:text-sm placeholder:text-[#A4A4A4]"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleAddTodo}
        className="border-[#30324B] hover:bg-[#575A84] hover:border-[#575A84] duration-300 border w-[38px] h-[32px] sm:w-[60px] sm:h-[50px] rounded-lg absolute right-5 top-1/2 transform -translate-y-1/2 flex items-center justify-center hover:text-black"
      >
        <span className="text-3xl sm:text-5xl font-bold pb-2 sm:pb-3">+</span>
      </button>
    </div>
  );
};
