'use client';
import { motion } from 'motion/react';
import Button from './_component/ui/Button';

export default function NotFound() {
  return (
    <div className="overflow-hidden py-[100px]">
      <motion.div
        initial={{ opacity: 0, x: -30, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{
          type: 'spring',
          duration: 1.2,
          delay: 1.4,
          bounce: 0.2,
        }}
        viewport={{ once: true, amount: 0.8 }}
        className=""
      >
        <div className="mx-[20px] my-[50px] flex max-w-[600px] flex-col items-center justify-center md:mx-auto">
          <Button text="Page not found" className="border border-[#a3a3a3b0]" />
          <p className="py-4 text-center text-[50px] md:text-[50px] md:whitespace-nowrap lg:text-[70px]">
            AI Couldn’t Predict This One!
          </p>
          <p className="py-2 text-center md:text-[18px]">
            Even AI isn’t perfect—this page seems to be missing! Let’s get you
            back on track. Head back home.
          </p>
          <Button text="Go Back Home" className="mt-4 bg-[#814AC9]" withArrow />
        </div>
      </motion.div>
    </div>
  );
}
