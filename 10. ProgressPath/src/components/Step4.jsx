import { useState } from "react";

const Step4 = () => {
  const [selectedOption, setSelectedOption] = useState("Only Admins");

  return (
    <div className="h-96">
      <h2 className="text-2xl font-bold text-center mb-1">Who can manage projects</h2>
      <p className="text-center text-gray-500 mb-6 text-sm">
        Don’t panic — You can also customize this permission in settings
      </p>

      {/* Options */}
      <div className="space-y-4">
        {/* Everyone Option */}
        <div
          onClick={() => setSelectedOption("Everyone")}
          className={`flex items-center border rounded-lg p-4 cursor-pointer ${
            selectedOption === "Everyone" ? "border-blue-500" : "border-gray-300"
          } hover:border-blue-500`}
        >
          <div className="w-10 h-10 flex items-center justify-center text-gray-500 text-2xl">
            👥
          </div>
          <div className="ml-4">
            <span className="text-gray-700 font-semibold">Everyone</span>
            <p className="text-gray-500 text-sm">
              All users can now see it, but guests cannot access the projects.
            </p>
          </div>
        </div>

        {/* Only Admins Option */}
        <div
          onClick={() => setSelectedOption("Only Admins")}
          className={`flex items-center border rounded-lg p-4 cursor-pointer ${
            selectedOption === "Only Admins" ? "border-blue-500" : "border-gray-300"
          } hover:border-blue-500`}
        >
          <div className="w-10 h-10 flex items-center justify-center text-gray-500 text-2xl">
            👤
          </div>
          <div className="ml-4">
            <span className="text-gray-700 font-semibold">Only Admins</span>
            <p className="text-gray-500 text-sm">
              Only admins can manage everything.
            </p>
          </div>
        </div>

        {/* Only Specific People Option */}
        <div
          onClick={() => setSelectedOption("Only Specific People")}
          className={`flex items-center border rounded-lg p-4 cursor-pointer ${
            selectedOption === "Only Specific People" ? "border-blue-500" : "border-gray-300"
          } hover:border-blue-500`}
        >
          <div className="w-10 h-10 flex items-center justify-center text-gray-500 text-2xl">
            👥
          </div>
          <div className="ml-4">
            <span className="text-gray-700 font-semibold">Only to Specific people</span>
            <p className="text-gray-500 text-sm">
              Only some specific people can access it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
