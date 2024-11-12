import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const handleCancel = () => {
    setStep(1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative"> {/* Add `relative` here */}
        
        {/* Cancel Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
          onClick={handleCancel}
        >
          &times;
        </button>

        <div className="h-full">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <Step5 />}
          {step === 6 && <Step6 />}
        </div>

        <div className="mt-4 flex justify-between">
          {step > 1 && (
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={prevStep}
            >
              Back
            </button>
          )}
          <div className="flex ml-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={i}
                className={`rounded-full w-2 h-2 mx-1 ${
                  step >= i ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          {step < 6 ? (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Create Project
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
