"use client";
import React, { ChangeEvent, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { IoTrashBin } from "react-icons/io5";

export const TaskTracker = () => {
  const [inputTask, setInputTask] = useState("");
  const [task, setTask] = useState<{ label?: string; active?: boolean }[]>([]);

  function handleClick() {
    if (!inputTask.trim()) return;
    const message = {
      label: inputTask,
      active: true,
    };

    setTask([...task, message]);
    setInputTask("");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputTask(e.target.value);
  }

  function toggleTask(index: number) {
    const updatedTask = [...task];
    updatedTask[index].active = !updatedTask[index].active;
    setTask(updatedTask);
  }
  console.log(task);

  function deleteTask(idx: number) {
    const updateArray = [...task];
    delete updateArray[idx];

    setTask(updateArray.filter(Boolean));
  }

  return (
    <div className=" bg-slate-800/50 border-2 border-slate-700  p-4 rounded-xl w-full">
      <div className="mb-4 border-2 border-slate-700 rounded-sm p-2 w-[100%] grid grid-cols-8 h-[60px]">
        <input
          className="col-span-7 p-2 focus:outline-0 bg-slate-800/50 text-[#f0f0f0] shadow-lg"
          type="text"
          value={inputTask}
          onChange={handleChange}
          placeholder="Enter task"
        />
        <div className="col-span-1 flex items-center justify-center text-gray-300 ">
          <IoMdAddCircle
            className="w-[40px] h-[40px] cursor-pointer text-[#4FC3F7]"
            onClick={handleClick}
          />
        </div>
      </div>

      <div className="space-y-2">
        {task.map(({ label, active }, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded px-2 py-1 bg-[#2d2d44]"
          >
            <div className="flex items-center gap-2 flex-1 overflow-hidden">
              <input
                type="checkbox"
                className="m-1"
                checked={!active}
                onChange={() => toggleTask(idx)}
              />
              <p
                className={`break-words w-full text-[#f0f0f0] ${
                  active ? "" : "line-through text-gray-500"
                }`}
              >
                {label}
              </p>
            </div>

            <IoTrashBin
              onClick={() => deleteTask(idx)}
              className="w-[20px] h-[20px] cursor-pointer flex-shrink-0 m-1 text-[#ff6b6b]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
