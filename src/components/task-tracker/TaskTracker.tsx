import React, { ChangeEvent, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { IoTrashBin } from "react-icons/io5";

export const TaskTracker = () => {
  const [inputTask, setInputTask] = useState("");
  const [task, setTask] = useState<{ label: string; active: boolean }[]>([]);

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

  return (
    <div className="bg-amber-50 w-[500px] m-2 p-4 rounded-xl">
      <div className="mb-4 border-2 border-black rounded-sm p-2 w-[100%] grid grid-cols-8 h-[60px]">
        <input
          className="col-span-7 p-2 focus:outline-0"
          type="text"
          value={inputTask}
          onChange={handleChange}
          placeholder="Enter task"
        />
        <div className="col-span-1 flex items-center justify-center">
          <IoMdAddCircle
            className="w-[40px] h-[40px] cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>

      <div className="space-y-2">
        {task.map(({ label, active }, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border border-amber-200 rounded px-2 py-1 bg-white"
          >
            <div className="flex items-center gap-2 flex-1 overflow-hidden">
              <input
                type="checkbox"
                className="m-1"
                checked={!active}
                onChange={() => toggleTask(idx)}
              />
              <p
                className={`break-words w-full ${
                  active ? "" : "line-through text-gray-500"
                }`}
              >
                {label}
              </p>
            </div>

            <IoTrashBin className="w-[20px] h-[20px] cursor-pointer flex-shrink-0 m-1" />
          </div>
        ))}
      </div>
    </div>
  );
};
