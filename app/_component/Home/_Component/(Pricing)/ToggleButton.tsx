'use client';
import { useState } from 'react';

export default function ToggleButton() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex items-center justify-center gap-4">
      <span className={` ${!isAnnual ? 'text-white' : 'text-[#cccccc]'}`}>
        Monthly
      </span>

      <button
        onClick={() => setIsAnnual(!isAnnual)}
        className={`relative flex h-8 w-16 items-center rounded-full border border-[#222222] p-1 duration-300 ${isAnnual ? 'bg-[#814AC8]' : 'bg-[#000000]'}`}
      >
        <span
          className={`h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ${
            isAnnual ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
      </button>

      <span className={` ${!isAnnual ? 'text-[#cccccc]' : 'text-white'}`}>
        Annually
      </span>
    </div>
  );
}
