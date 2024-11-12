import { useState } from 'react';

function Step5() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Marketing Website Design', completed: false },
    { id: 2, text: 'Branding Design', completed: false },
    { id: 3, text: 'UI/UX Fundamentals', completed: true },
    { id: 4, text: 'Wireframe and Prototyping', completed: false },
    { id: 5, text: 'Style Guide', completed: false },
    { id: 6, text: 'UX Research and Flows', completed: false },
    { id: 7, text: 'Layout Design', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleTaskAdd = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleTaskToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="h-96">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      <div className="mb-4">
        <label htmlFor="newTask" className="block text-sm font-medium text-gray-700">
          Add a task
        </label>
        <div className="flex">
          <input
            type="text"
            id="newTask"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={newTask}
            onChange={handleTaskChange}
          />
          <button
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleTaskAdd}
          >
            Add
          </button>
        </div>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskToggle(task.id)}
            />
            <span className={`ml-2 ${task.completed ? '' : ''}`}>
              {task.text}
            </span>
            <button
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={() => handleTaskRemove(task.id)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Step5;
