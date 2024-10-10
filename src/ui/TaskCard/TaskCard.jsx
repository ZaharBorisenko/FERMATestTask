import React, { useState, useRef } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import "./style.css";
import {
  removeTodo,
  toggleTodoCompleted,
  editTodo,
} from "../../store/todoSlice";
import { toastWarn } from "../../lib/toast";

export const TaskCard = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const inputRef = useRef(null);

  const handleToggleComplete = () => {
    dispatch(toggleTodoCompleted(id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedText(text);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  const handleSaveEdit = () => {
    if (editedText.trim()) {
      dispatch(editTodo({ id, newText: editedText }));
      setIsEditing(false);
    } else toastWarn("Вы не можете оставить задачу пустой!");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    }
  };

  return (
    <div className="w-full bg-white shadow-[0px_5px_20px_1px_rgba(34,60,80,0.2)] p-5 rounded-lg sm:rounded-[1.25rem]">
      <h4 className="text-[#30324B] font-bold text-base sm:text-xl mb-5">
        Сегодня
      </h4>

      <div className="flex items-center">
        <div className="relative">
          <input
            type="checkbox"
            id={`checkbox-${id}`}
            className="peer hidden"
            checked={completed}
            onChange={handleToggleComplete}
          />
          <label
            htmlFor={`checkbox-${id}`}
            className={`flex items-center justify-center w-7 h-7 rounded-full cursor-pointer transition-colors duration-300 ${
              completed
                ? "bg-[#6AD400] border-2 border-[#6AD400]"
                : "border-2 border-[#A4A4A4] hover:bg-[#D9D9D9]"
            }`}
          />
        </div>

        {isEditing ? (
          <input
            ref={inputRef}
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="ml-7 outline-none border-b-[1px] border-[#A4A4A4] w-full max-w-2xl break-words"
          />
        ) : (
          <p
            onClick={handleEdit}
            className={`ml-7 text-[#30324B] text-base leading-5 cursor-pointer w-full max-w-2xl ${
              completed && "line-through"
            }`}
            style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
          >
            {text}
          </p>
        )}
      </div>

      <div className="flex justify-end items-center gap-2.5">
        {isEditing && (
          <button
            onClick={handleSaveEdit}
            className="text-[#0013FF] hover:text-[#000000b2] text-base duration-300"
          >
            Сохранить
          </button>
        )}
        <div className={`icon-wrapper icon-edit ${isEditing ? "active" : ""}`}>
          <IconContext.Provider value={{ className: "icon" }}>
            <FiEdit size={24} className="cursor-pointer" onClick={handleEdit} />
          </IconContext.Provider>
        </div>
        <div className="icon-wrapper">
          <IconContext.Provider value={{ className: "icon" }}>
            <RiDeleteBin5Line
              size={24}
              className="cursor-pointer"
              onClick={handleDelete}
            />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};
