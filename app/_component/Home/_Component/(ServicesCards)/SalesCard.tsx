'use client';
import { motion } from 'motion/react';
import { PiCircleNotch } from 'react-icons/pi';
import CardSale from './CardSale';
import ProgressSales from './ProgressSale';

export default function SalesCard() {
  return (
    <div className="rounded-[10px] bg-[#0D0D0D] px-[50px] pt-[30px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          duration: 2.2,
          delay: 0.4,
          bounce: 0.2,
        }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="flex flex-col justify-center rounded-[6px] bg-[#000000] px-[20px] py-[20px]">
          <div className="flex justify-between rounded-[6px] border border-[#a3a3a3b0] px-4 py-2 text-[12px]">
            <p>E-mail Sending..</p>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: 'linear',
              }}
            >
              <PiCircleNotch className="h-[20px] w-[20px] text-3xl text-purple-600" />
            </motion.div>
          </div>
          <div className="py-2 text-[13px]">
            <span className="rounded-[15px] border border-[#a3a3a3b0] px-2">
              Linkedin
            </span>
            <span className="mx-2 rounded-[15px] border border-[#a3a3a3b0] px-2">
              IT Services
            </span>
            <span className="rounded-[15px] border border-[#a3a3a3b0] px-2">
              Founders
            </span>
          </div>

          <div className="h-[120px] overflow-hidden">
            <motion.div
              animate={{ y: ['0', '-50%'] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 15,
                ease: 'linear',
              }}
            >
              <CardSale />
              <CardSale />
              <CardSale />
              <CardSale />
            </motion.div>
          </div>
        </div>
        <ProgressSales />
      </motion.div>
    </div>
  );
}
