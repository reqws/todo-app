"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTask();
  };

  const removeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-100 to-blue-100 dark:from-neutral-900 dark:to-neutral-800 px-4 py-10 transition-colors duration-300">
  <div className="w-full max-w-md bg-white dark:bg-neutral-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl p-6 border border-gray-200 dark:border-neutral-700">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white tracking-tight">
      📝 To-Do List
    </h1>

    <div className="flex gap-2 mb-6">
      <input
        type="text"
        className="flex-grow px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition"
        placeholder="Add a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button
        onClick={addTask}
        className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 active:scale-95 transition-transform duration-150"
      >
        Add
      </button>
    </div>

    <ul className="space-y-3">
      {tasks.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          No tasks yet.
        </p>
      ) : (
        tasks.map((t, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 dark:bg-neutral-700 px-4 py-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-600 transition-colors duration-200"
          >
            <span className="text-gray-800 dark:text-white break-words max-w-[75%]">
              {t}
            </span>
            <button
              onClick={() => removeTask(index)}
              className="text-red-500 hover:text-red-600 text-sm font-medium"
            >
              ✖
            </button>
          </li>
        ))
      )}
    </ul>
  </div>
</div>

  );
}
