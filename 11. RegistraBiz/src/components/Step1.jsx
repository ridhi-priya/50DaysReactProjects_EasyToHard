// src/App.jsx
import logo from '../assets/nablasol_logo.jpg'
import { useState } from 'react';
import Step2 from '../components/Step2'
const Step1 = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <div className="h-96 ">
      <div className="flex justify-center items-center flex-col min-h-screen bg-gradient-to-r from-indigo-950	via-purple-800 to-blue-900 ">

      <div className="flex justify-between items-center">
  <div className="flex items-center">
    <img src={logo} alt="company Logo" className="w-10 h-10 mr-4" />
    <h1 className="text-center text-white text-2xl font-semibold text-gray-800 mb-8 mr-4">Create New Account</h1>
  </div>
  <p className="text-white mr-4">Contact</p>
</div> 

      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg">
        {/* Header */}
        
        {/* Step Indicator */}
        <div className="flex justify-between mb-2 w-full">
  <div
    className={`flex-grow py-2 text-center ${step === 1 ? 'bg-blue-500 ' : 'bg-gray-200'}`}
  >
    1 Your Profile
  </div>
  <div
    className={`flex-grow py-2 text-center ${step === 2 ? 'bg-blue-500 ' : 'bg-gray-200'}`}
  >
    2 Business Information
  </div>
  <div
    className={`flex-grow py-2 text-center ${step === 3 ? 'bg-blue-500 ' : 'bg-gray-200'}`}
  >
    3 Additional Users
  </div>
</div>


        {/* Form Content */}
        {step === 1 && (
          <div className="text-center p-6">
            <h3 className="text-l text-gray-400 mb-2">Step 1</h3>
            <p className="text-gray-500 mb-2">
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
          <div className="text-center p-6">
            <h3 className="text-gray-500 mb-2">Step 2</h3>
            <p className="text-2xl font-semibold text-gray-700 mb-2">
             Business Information.
            </p>
            {/* Add form fields for business information here */}
            
            <Step2 />
          </div>
        )}
        {step === 3 && (
          <div className="text-center p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Step 3</h3>
            <p className="text-gray-500 mb-8">
              Add additional users to your account.
            </p>
            {/* Add form fields for additional users here */}
           
          </div>
        )}

       
      </div>
      <div> {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-2">
          <button
            disabled={step === 1}
            className="text-white hover:text-red hover:underline disabled:opacity-50"
          >
            &lt; Back to Login
          </button>
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {step <4 ? 'Previous Step ' : 'Submit'}
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {step < 3 ? 'Next Step >' : 'Submit'}
          </button>
        </div></div>
    </div>
    
    </div>
  );
};

export default Step1;
