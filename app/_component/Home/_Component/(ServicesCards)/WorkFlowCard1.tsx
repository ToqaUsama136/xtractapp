'use client';
import { motion } from 'motion/react';
import Button from '../../../ui/Button';
import CardWorkFlow from './CardWorkFlow';

export default function WorkFlowCard1() {
  return (
    <div className="rounded-[10px] bg-[#0D0D0D] pt-[40px] md:px-[40px]">
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
        <div className="rounded-t-[6px] bg-[#000000] px-2 py-2">
          <div className="my-2 rounded-[6px] border border-[#a3a3a3b0]">
            <Button text={'All tasks'} />
            <p className="mx-2 inline-block">waiting for approval</p>
          </div>
          <div className="h-[250px] overflow-hidden rounded-[6px]">
            <motion.div
              animate={{ y: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 15,
                ease: 'linear',
              }}
              className="flex flex-col gap-2"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <CardWorkFlow />
                  <CardWorkFlow />
                  <CardWorkFlow />
                  <CardWorkFlow />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
