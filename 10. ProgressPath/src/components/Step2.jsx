import { useState } from "react";

const Step2 = () => {
  const [selectedTab, setSelectedTab] = useState("Time & Materials");
  const [hourlyRate, setHourlyRate] = useState("₹ 12,678.00");
  const [alertPercentage, setAlertPercentage] = useState(80);
  const [budgetReset, setBudgetReset] = useState(false);
  const [sendAlert, setSendAlert] = useState(true);

  return (
    <div className="h-96">
      <h2 className="text-2xl font-bold text-center mb-1">Project type</h2>
      <p className="text-center text-gray-500 mb-4 text-sm">
        Don’t panic — You can also customize these types in settings
      </p>

      {/* Tabs */}
      <div className="flex justify-center space-x-2 mb-2">
        {["Time & Materials", "Fixed Fee", "Non-Billable"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-md ${
              selectedTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Hourly Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Hourly</h3>
        <p className="text-sm text-gray-500 mb-2">
          We need hourly rates to track your project’s billable amount.
        </p>
        <div className="flex items-center space-x-2">
          <select
            className="border border-gray-300 rounded-md p-2"
            defaultValue="Project Hourly Rate"
          >
            <option>Project Hourly Rate</option>
            <option>Task Hourly Rate</option>
            <option>Custom Rate</option>
          </select>
          <input
            type="text"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-32 text-right"
          />
        </div>
      </div>

      {/* Budget Section */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Budget</h3>
        <p className="text-sm text-gray-500 mb-2">
          We need hourly rates to track your project’s billable amount.
        </p>
        <select className="border border-gray-300 rounded-md p-2 mb-2 w-full">
          <option>Hours per Person</option>
          <option>Total Hours</option>
          <option>Custom Budget</option>
        </select>
        <div className="flex text-sm items-center space-x-2">
          <input
            type="checkbox"
            checked={budgetReset}
            onChange={(e) => setBudgetReset(e.target.checked)}
            className="form-checkbox"
          />
          <label>Budget resets every month</label>
        </div>
        <div className="flex items-center text-sm space-x-2 mt-2">
          <input
            type="checkbox"
            checked={sendAlert}
            onChange={(e) => setSendAlert(e.target.checked)}
            className="form-checkbox "
          />
          <label>Send email alerts if project exceeds</label>
          <input
            type="number"
            value={alertPercentage}
            onChange={(e) => setAlertPercentage(e.target.value)}
            className="border border-gray-300 rounded-md p-1 w-16 text-center"
          />
          <span>% of budget</span>
        </div>
      </div>
    </div>
  );
};

export default Step2;
