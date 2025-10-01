'use client';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

type FaqProps = {
  question: string;
  answer: string;
};

export default function Card({ question, answer }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative rounded-[10px] border border-[#333] px-10 py-2">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-[#814AC840] via-[#0d0d0d] to-[#814AC840]" />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left text-white"
      >
        <p className=" ">{question}</p>
        <FiChevronDown
          className={`h-5 w-5 text-white transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="pb-4 text-sm text-[#ccc] transition-all duration-300">
          {answer}
        </div>
      )}
    </div>
  );
}
