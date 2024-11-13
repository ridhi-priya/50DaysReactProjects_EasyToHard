// src/App.jsx
import { useState } from 'react';
import Step2 from '../components/Step2'
const Step1 = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-400 to-blue-600">
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        {/* Header */}
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">Create New Account</h2>
        
        {/* Step Indicator */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className={`px-4 py-2 rounded-full ${step === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>1 Your Profile</div>
          <div className={`px-4 py-2 rounded-full ${step === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>2 Business Information</div>
          <div className={`px-4 py-2 rounded-full ${step === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>3 Additional Users</div>
        </div>

        {/* Form Content */}
        {step === 1 && (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Step 1</h3>
            <p className="text-gray-500 mb-8">
              Enter the login information for your account. You will be able to create additional users after registering.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name*" className="border p-2 rounded-md"/>
              <input type="text" placeholder="Last Name*" className="border p-2 rounded-md"/>
              <input type="email" placeholder="Email*" className="border p-2 rounded-md"/>
              <input type="text" placeholder="Phone Number*" className="border p-2 rounded-md"/>
              <input type="password" placeholder="Password*" className="border p-2 rounded-md"/>
              <input type="password" placeholder="Confirm Password*" className="border p-2 rounded-md"/>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Step 2</h3>
            <p className="text-gray-500 mb-8">
              Fill out your business information.
            </p>
            {/* Add form fields for business information here */}
            <Step2 />
          </div>
        )}
        {step === 3 && (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Step 3</h3>
            <p className="text-gray-500 mb-8">
              Add additional users to your account.
            </p>
            {/* Add form fields for additional users here */}
           
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrev}
            disabled={step === 1}
            className="text-blue-500 hover:underline disabled:opacity-50"
          >
            &lt; Back to Login
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {step < 3 ? 'Next Step >' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
