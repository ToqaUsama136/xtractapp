'use client';
import { motion } from 'motion/react';
import LogoTicker from './LogoTicker';
export default function Logos() {
  return (
    <>
      <div className="mx-[100px] my-[50px] flex flex-col items-center justify-center">
        <p className="py-4 text-center">Over 50+ business trust us</p>
        <div className="flex w-[300px] items-center justify-center overflow-hidden md:w-[600px]">
          <motion.div
            animate={{ x: ['0%', '-40%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 15,
              ease: 'linear',
            }}
            className="my-4 flex w-max gap-20"
          >
            <LogoTicker />
            <LogoTicker />
            <LogoTicker />
            <LogoTicker />
          </motion.div>
        </div>
      </div>
    </>
  );
}
