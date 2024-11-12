import { useState } from "react";

const Step3 = () => {
  const [selectedView, setSelectedView] = useState("Board");

  return (
    <div className=" h-96">  {/* Add h-full class here */}
      <h2 className="text-2xl font-bold text-center mb-1">Select a view</h2>
      <p className="text-center text-gray-500 mb-6">
        You can also customize this view in settings
      </p>

      {/* Options */}
      <div className="flex justify-center space-x-4">
        {/* List View */}
        <div
          onClick={() => setSelectedView("List")}
          className={`flex flex-col items-center border rounded-lg p-4 w-36 cursor-pointer ${
            selectedView === "List" ? "border-blue-500" : "border-gray-300"
          } hover:border-blue-500`}
        >
          <div className="w-10 h-10 bg-gray-200 rounded-sm mb-2 flex items-center justify-center">
            <span className="text-gray-500 text-sm">📄</span>
          </div>
          <span className="text-gray-700 font-semibold">List</span>
        </div>

        {/* Board View */}
        <div
          onClick={() => setSelectedView("Board")}
          className={`flex flex-col items-center border rounded-lg p-4 w-36 cursor-pointer ${
            selectedView === "Board" ? "border-blue-500" : "border-gray-300"
          } hover:border-blue-500`}
        >
          <div className="w-10 h-10 bg-gray-200 rounded-sm mb-2 flex items-center justify-center">
            <span className="text-gray-500 text-sm">📋</span>
          </div>
          <span className="text-gray-700 font-semibold">Board</span>
        </div>
      </div>
    </div>
  );
};

export default Step3;