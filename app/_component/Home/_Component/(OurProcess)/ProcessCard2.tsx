'use client';
import TittleProcess from '@/app/_component/ui/TittleProcess';
import { motion } from 'motion/react';
import { CiFileOn } from 'react-icons/ci';
import { FaArrowLeft, FaArrowRight, FaXmark } from 'react-icons/fa6';
import { FiMinus } from 'react-icons/fi';
import { IoIosSearch } from 'react-icons/io';
import { PiCardsThin, PiPuzzlePieceLight } from 'react-icons/pi';
export default function ProcessCard2() {
  return (
    <div className="rounded-[5px] border border-[#222222] bg-[#0D0D0D]">
      <TittleProcess
        p1="step2"
        p2="AI Development"
        p3="Our team builds intelligent automation systems tailored to your business processes."
      />
      <div className="mx-[60px] my-[30px] border border-[#222222]">
        <div className="flex justify-between bg-[#cccccc0d] px-4 py-1">
          <div className="flex gap-2">
            <FaArrowLeft />
            <FaArrowRight />
          </div>
          <div className="mt-1 h-[5px] w-[91px] rounded-[2px] bg-[#222222]" />
          <div className="flex gap-1">
            <PiCardsThin />
            <FiMinus />
            <FaXmark />
          </div>
        </div>
        <div className="flex">
          <div className="w-8 space-y-6 bg-[#cccccc0d] px-2 py-2">
            <CiFileOn />
            <IoIosSearch />
            <PiPuzzlePieceLight />
          </div>
          <div className="h-[140px] w-[340px] overflow-hidden px-2 pt-2">
            <motion.div
              animate={{ y: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 15,
                ease: 'linear',
              }}
              className="px-8 py-4 text-[12px] whitespace-pre"
            >
              {`class AutomationTrigger:
    def __init__(self, threshold):
        self.threshold = threshold
        self.status = "inactive"

    def check_trigger(self, value):
        if value > self.threshold:
            self.status = "active"
            return "Automation triggered!"
        else:
            return "No action taken."

    def get_status(self):
        return f"Status: {self.status}"`}
              {`class AutomationTrigger:
    def __init__(self, threshold):
        self.threshold = threshold
        self.status = "inactive"

    def check_trigger(self, value):
        if value > self.threshold:
            self.status = "active"
            return "Automation triggered!"
        else:
            return "No action taken."

    def get_status(self):
        return f"Status: {self.status}"`}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
