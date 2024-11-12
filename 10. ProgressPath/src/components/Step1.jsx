import { useState } from 'react';

function Step1() {
  const [projectName, setProjectName] = useState('');
  const [client, setClient] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <div className='h-96'>
      <h2 className="text-xl max-w-lg  font-bold mb-4">Create a project</h2>
      <div className="mb-4">
        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
          Project name
        </label>
        <input
          type="text"
          id="projectName"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="client" className="block text-sm font-medium text-gray-700">
          Client
        </label>
        <div className="flex items-center space-x-4">
  <select
    id="client"
    className=" py-2 px-20 block w-auto bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    value={client}
    onChange={(e) => setClient(e.target.value)}
  >
    <option value="">Select a client</option>
    
    {/* Add more options here */}
  </select>
  <button className="bg-blue-500 hover:bg-blue-700 text-sm text-white rounded px-4 py-2">
    + New Client
  </button>
</div>
      </div>

      <div className="mb-4">
        <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
          Dates
        </label>
        <div className="flex">
          <input
            type="date"
            id="startDate"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <span className="mx-2">-</span>
          <input
            type="date"
            id="endDate"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Notes
        </label>
        <textarea
          id="notes"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      
    </div>
  );
}

export default Step1;