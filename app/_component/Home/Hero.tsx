'use client';
import { motion } from 'motion/react';
import Button from '../ui/Button';
export default function Hero() {
  return (
    <>
      <div className="mx-auto px-[20px] pt-[180px] pb-[100px] md:w-[600px] md:px-[40px] lg:w-[900px]">
        {/* <div className="z-0 flex items-center justify-center">
          <motion.img
            src="/images/Big Circle.png"
            alt="Big Circle"
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
              duration: 3,
            }}
            className="bg-[#DF7AFE] p-2"
          />
        </div> */}
        <div className="z-10 text-center">
          <motion.p
            className="py-2 text-[30px] md:text-[60px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,

              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            Intelligent Automation for Modern Businesses.
          </motion.p>
          <motion.p
            className="py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.4,

              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            Xtract brings AI automation to your fingertips & streamline tasks.
          </motion.p>

          <Button
            text={'Get in touch'}
            className="mx-2 my-4 bg-[#814AC8]"
            withArrow
          />
          <Button
            text={'View Services'}
            className="my-4 border border-[#a3a3a3b0]"
          />
        </div>
      </div>
    </>
  );
}
