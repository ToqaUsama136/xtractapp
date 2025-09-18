import { motion } from 'motion/react';
import { RxReload } from 'react-icons/rx';
import CardSale from './CardSale';

export default function SalesCard() {
  return (
    <div className="rounded-[10px] bg-[#0D0D0D] px-[50px] pt-[30px]">
      <div className="flex flex-col justify-center rounded-[6px] bg-[#000000] px-[20px] py-[20px]">
        <div className="flex justify-between rounded-[6px] border border-[#a3a3a3b0] px-4 py-4">
          <p>Email Sending</p>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: 'linear',
            }}
            className="h-[25px] w-[25px]"
          >
            <RxReload className="text-3xl text-purple-600" />
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

        <div>
          <CardSale />
        </div>
      </div>
    </div>
  );
}
