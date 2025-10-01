'use client';
import Ticker from 'framer-motion-ticker';
import { motion } from 'motion/react';
import LogoTicker from './LogoTicker';

export default function Logos() {
  return (
    <>
      <div className="mx-[100px] my-[100px] flex flex-col items-center justify-center">
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
          <p className="py-4 text-center">Over 50+ business trust us</p>
          <div className="flex w-[300px] items-center justify-center overflow-hidden md:w-[600px]">
            <Ticker duration={20}>
              <LogoTicker />
              <LogoTicker />
              <LogoTicker />
              <LogoTicker />
            </Ticker>
          </div>
        </motion.div>
      </div>
    </>
  );
}
