'use client';
import { motion } from 'motion/react';
import Button from '../../ui/Button';
import CardWorkFlow from './CardWorkFlow';

export default function WorkFlowCard1() {
  return (
    <div className="rounded-[10px] bg-[#0D0D0D] py-[40px] md:px-[40px]">
      <div className="rounded-[6px] bg-[#000000] px-2 py-2">
        <div className="border- my-2 rounded-[6px] border border-[#a3a3a3b0]">
          <Button text={'All tasks'} />
          <p className="mx-2 inline-block">waiting for approval</p>
        </div>
        <div className="h-[250px] overflow-hidden rounded-[6px]">
          <motion.div
            animate={{ y: ['0%', '-60%'], opacity: [0, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 15,
              ease: 'linear',
            }}
            className="flex flex-col gap-2"
          >
            <CardWorkFlow />
            <CardWorkFlow />
            <CardWorkFlow />
            <CardWorkFlow />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
