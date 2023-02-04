import React, { useState } from 'react';
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import Form4 from "../components/Form4"

import ProgressBar from '../components/ProgressBar';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };



  return (
    <div className="from-cata-300 to-mods-300 bg-gradient-to-br 
    h-screen grid items-center text-center mx-auto">
      <form>
        {currentStep === 1 && (
          <div className='formCard'>
           <ProgressBar/>
           <Form1/>
          </div>
        )}
        {currentStep === 2 && (
          <div className='formCard'>
            <ProgressBar/>
            <Form2/>
         </div>
        )}
        {currentStep === 3 && (
          <div className='formCard'>
            <ProgressBar/>
            <Form3/>
         </div>
        )}
        {currentStep === 4 && (
          <div className='formCard'>
            <ProgressBar/>
            <Form4/>
          </div>
        )}
        <div className=" mt-8">
          {currentStep !== 1 && (
            <button
              type='button'
              className="bg-gray-300 text-gray-700 p-2 rounded-md"
              onClick={prevStep}
            >
              Previous
            </button>
          )}
          {currentStep !== 4 ? (
            <button
              type='button'
              className="bg-indigo-500 text-white p-2 rounded-md"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button
              type='button'
              className="bg-indigo-500 text-white p-2 rounded-md font-bau"
              
            >
              Submit
            </button>
          )}
        </div>

      </form>
    </div>
  );
};

export default Form;