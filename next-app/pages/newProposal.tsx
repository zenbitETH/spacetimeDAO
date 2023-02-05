import React, { useState } from 'react';
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import Form4 from "../components/Form4"

import ProgressBar from '../components/ProgressBar';

interface Evidence {
  date: Date;
  description: string;
  evidenceForm: string
}

interface Proposal {
  name: string;
  type: string;
  description: string;
  location: string;
  evidence: Evidence
}

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [evidence, setEvidence] = useState<Evidence>({
    date: new Date(),
    description: "",
    evidenceForm: "",
  })
  const [proposal, setProposal] = useState<Proposal>({
    name: "",
    type: "",
    description: "",
    location: "",
    evidence: evidence,
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="from-cata-300 to-mods-300 bg-gradient-to-br 
    h-screen grid items-center text-center mx-auto">
      <form className='formCard'>
        {currentStep === 1 && (
          <div className=''>
           <ProgressBar currentStep={1}/>
           <Form1 proposal={proposal} setProposal={setProposal} nextStep={nextStep} />
          </div>
        )}
        {currentStep === 2 && (
          <div className=''>
            <ProgressBar currentStep={2}/>
            <Form2 nextStep={nextStep}/>
         </div>
        )}
        {currentStep === 3 && (
          <div className=''>
            <ProgressBar currentStep={3}/>
            <Form3 proposal={proposal} setProposal={setProposal} nextStep={nextStep} />
         </div>
        )}
        {currentStep === 4 && (
          <div className=''>
            <ProgressBar currentStep={4}/>
            <Form4 proposal={proposal}/>
          </div>
        )}
        <div className=" flex justify-between m-auto gap-5">
          {currentStep !== 1 && (
            <button
              type='button'
              className="formBT"
              onClick={prevStep}
            >
              Previous
            </button>
          )}
          {currentStep !== 4 ? (
            <button
              type='button'
              className="formBT"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button
              type='button'
              className="formBT"
              
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