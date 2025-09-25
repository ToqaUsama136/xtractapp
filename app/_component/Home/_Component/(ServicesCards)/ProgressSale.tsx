'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const steps = ['Draft', 'Schedule', 'Sent'];
export default function ProgressSales() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-2">
      <div className="relative flex w-full max-w-md items-center justify-between">
        {steps.map((_, index) => (
          <div key={index} className="relative flex-1">
            {index < steps.length - 1 && (
              <motion.div
                className="absolute top-[5px] right-0 left-1/2 h-[2px] bg-[#333333]"
                initial={{ width: 0 }}
                animate={{
                  width:
                    index < currentStep
                      ? '100%'
                      : index === currentStep
                        ? '100%'
                        : '0%',
                  backgroundColor: index < currentStep ? '#a855f7' : '#333',
                }}
                transition={{ duration: 0.5 }}
              />
            )}
            <motion.div
              className="z-10 mx-auto h-3 w-3 rounded-full border-2"
              initial={false}
              animate={{
                backgroundColor: index <= currentStep ? '#a855f7' : '#222',
                borderColor: index <= currentStep ? '#a855f7' : '#444',
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex w-full max-w-md justify-between text-sm">
        {steps.map((label, index) => (
          <span key={index} className="w-[33%] text-center">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
